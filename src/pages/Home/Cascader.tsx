import { Cascader, CascaderProps, MultiCascader } from "rsuite";
import "rsuite/lib/Cascader/styles/index";
import "rsuite/lib/MultiCascader/styles/index";
import React from "react";

interface Props extends Omit<CascaderProps, "onChange"> {
  type: "single" | "multiple";
  onChange?: (value: string[]) => void;
}

const CascaderCOm = (props: Props) => {
  const { type, data, onChange, ...other } = props;

  const handleChange = (value: string[]) => {
    console.log(value);
    onChange?.(value);
  };

  const commonProps: CascaderProps = {
    data,
    valueKey: "value",
    labelKey: "label",
    onChange: handleChange,
    ...other,
  };

  return type === "single" ? <Cascader {...commonProps} /> : <MultiCascader {...commonProps} />;
};

export default CascaderCOm;
