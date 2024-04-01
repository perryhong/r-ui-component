import classNames from "classnames";
import React, { useEffect, useState } from "react";

export type SpecValueItem = {
  id: string;
  value: string;
};

export type SpecItem = {
  title: string;
  list: SpecValueItem[];
};

export type SpecCombinationItem = {
  id: string;
  specs: SpecValueItem[];
};

export interface SkuProps {
  className?: string;
  specList: SpecItem[];
  specCombinationList: SpecCombinationItem[];
  onSkuSelected: (val: SpecCombinationItem) => void;
}

type SpecsItem = SpecValueItem | null;

/**
 * Sku 选择器 通过点击切换sku属性
 *
 * ~~~js
 * // 这样引用
 * import { Sku } from '@pekings/r-ui-component'
 * ~~~
 */
export const Sku: React.FC<SkuProps> = (props) => {
  const { className, specList, specCombinationList, onSkuSelected } = props;

  const [specsArr, setSpecsArr] = useState<SpecsItem[]>([]);
  const [adjoinArr, setAdjoinArr] = useState<(number | number[])[]>([]);
  const [optionSpecs, setOptionSpecs] = useState<SpecValueItem[]>([]);

  const vertex = specList.reduce(
    (prev: SpecValueItem[], cur) => [...prev, ...cur.list],
    []
  );
  const len = vertex.length;

  const setAdjoinVertexs = (
    side: SpecValueItem,
    sides: SpecValueItem[],
    weight: number
  ) => {
    let pIndex = -1;
    for (let i = 0; i < len; i += 1) {
      if (side.id === vertex[i].id) {
        pIndex = i;
        break;
      }
    }
    sides.forEach((item) => {
      let index = -1;
      for (let i = 0; i < len; i += 1) {
        if (item.id === vertex[i].id) {
          index = i;
          break;
        }
      }

      setAdjoinArr((arr) => {
        const newArr = [...arr];
        const cur = newArr[pIndex * len + index];
        if (Array.isArray(cur)) {
          cur.push(weight);
        } else if (typeof cur === "number" && cur > 1) {
          newArr[pIndex * len + index] = [cur, weight];
        } else {
          newArr[pIndex * len + index] = weight;
        }
        return newArr;
      });
    });
  };

  const fillInSpec = (params: SpecValueItem[], weight: number) => {
    params.forEach((param) => {
      setAdjoinVertexs(param, params, weight);
    });
  };

  const getVertexCol = (param: SpecValueItem) => {
    let idx = -1;
    for (let i = 0; i < len; i += 1) {
      if (param && param.id === vertex[i].id) {
        idx = i;
        break;
      }
    }
    const col: (number | number[])[] = [];
    vertex.forEach((item, pIndex) => {
      col.push(adjoinArr[idx + len * pIndex]);
    });
    return col;
  };

  /*
   *  @param params
   * 传入多个数组，判断是否有交集
   */
  const isArrayUnions = (params: number[][]) => {
    if (!params.length || !params[0]) return false;
    return params[0].some((t) => params.every((_t) => _t && _t.includes(t)));
  };

  /*
   *  @param params
   * 传入一个交集行，判断内部是否互相相等
   */
  const isItemEqual = (params: (number | number[])[]) => {
    if (params && params.includes(0)) return false;
    let weight = -1;

    // 找出权值
    if (params.length) {
      params.some((t) => {
        if (typeof t === "number") weight = t;
        return typeof t === "number";
      });
      if (weight === -1) {
        return isArrayUnions(params as number[][]);
      }
    }

    return params.every((t) => {
      if (typeof t === "number") {
        return t === weight;
      }
      return t && t.includes(weight);
    });
  };

  const getUnion = (params: SpecValueItem[]) => {
    const paramsVertex = params.map((param) => getVertexCol(param));

    const union: SpecValueItem[] = [];
    paramsVertex.forEach((col, index) => {
      if (col.some((item) => item !== 0)) union.push(params[index]);
    });

    return union;
  };

  const getIntersection = (params: SpecValueItem[]) => {
    const paramsVertex = params.map((id) => getVertexCol(id));
    const intersection: SpecValueItem[] = [];
    vertex.forEach((type, index) => {
      const row = paramsVertex.map((col) => col[index]).filter((t) => t !== 1);
      if (isItemEqual(row)) {
        intersection.push(type);
      }
    });

    return intersection;
  };

  const getSpecOptions = (params: SpecsItem[]) => {
    let specOptionCanChoose: SpecValueItem[] = [];
    if (params.some(Boolean)) {
      specOptionCanChoose = getIntersection(
        params.filter(Boolean) as SpecValueItem[]
      );
    } else {
      specOptionCanChoose = getUnion(vertex);
    }
    return specOptionCanChoose;
  };

  const initSpec = () => {
    specCombinationList.forEach((item, index) =>
      fillInSpec(item.specs, index + 2)
    );
  };

  const initSameLevel = () => {
    specList.forEach((item) => {
      const params: SpecValueItem[] = [];
      // 获取同级别顶点
      item.list.forEach((val) => {
        if (optionSpecs.includes(val)) params.push(val);
      });
      // 同级点位创建
      fillInSpec(params, 1);
    });
  };

  const isActive = (item: SpecValueItem) => {
    return !!specsArr.find((specs) => specs && specs.id === item.id);
  };

  const isOptions = (item: SpecValueItem) => {
    return !!optionSpecs.find((specs) => specs.id === item.id);
  };

  const getSpecChoiceClasses = (item: SpecValueItem) => {
    return classNames("rec-spec-choice", {
      "rec-spec-choice-active": isActive(item),
      "rec-spec-choice-disabled": !isOptions(item),
    });
  };

  const init = () => {
    const adjoin = new Array(len * len).fill(0);
    const specs = new Array(specList.length).fill(null);
    setAdjoinArr(adjoin);
    setSpecsArr(specs);
    initSpec();
    initSameLevel();
  };

  const handleSpecChoiceClick = (
    flag: boolean,
    item: SpecValueItem,
    idx: number
  ) => {
    // 排除可选规格里面没有的规格
    if (!flag) return;
    // 根据text判断是否已经被选中了，如果已选则取消选中
    if (!specsArr[idx]) {
      setSpecsArr((arr) => {
        const newArr = [...arr];
        newArr[idx] = item;
        return newArr;
      });
    } else {
      setSpecsArr((arr) => {
        const newArr = [...arr];
        newArr[idx] = newArr[idx]?.id === item.id ? null : item;
        return newArr;
      });
    }
  };

  useEffect(() => {
    const newOptionSpecs = getSpecOptions(specsArr);
    setOptionSpecs(newOptionSpecs);
    if (specsArr.every(Boolean) && specsArr.length === specList.length) {
      for (let i = 0; i < specCombinationList.length; i += 1) {
        const specComb = specCombinationList[i];
        const combSpecMap: { [key: string]: number } = {};
        specComb.specs.forEach(
          (item: SpecValueItem) => (combSpecMap[`${item.value}-${item.id}`] = 1)
        );

        let flag = true;
        for (let j = 0; j < specsArr.length; j += 1) {
          const item = specsArr[j];
          const specMapKey = `${item?.value}-${item?.id}`;
          if (!combSpecMap[specMapKey]) {
            flag = false;
            break;
          }
        }
        if (flag) {
          onSkuSelected(specComb);
          break;
        }
      }
    }
  }, [specsArr, specCombinationList, specList]);

  useEffect(() => {
    init();
  }, []);

  const classes = classNames("rec-sku-container", className);

  return (
    <div data-testid="rec-sku" className={classes}>
      {specList.map((item, idx) => {
        return (
          <div className="rec-spec-block" key={item.title}>
            <p className="rec-spec-title">{item.title}</p>
            <div className="rec-spec-row">
              {item.list.map((specItem) => (
                <span
                  className={getSpecChoiceClasses(specItem)}
                  key={specItem.id}
                  onClick={() =>
                    handleSpecChoiceClick(isOptions(specItem), specItem, idx)
                  }
                >
                  {specItem.value}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sku;
