import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface Props {
    parameterName: string;
    options: any[]; //FIXME WAY LATER
    dispatchFn: Function;
    isChecked: (opt) => boolean;
}

const SidebarParameter: React.FC<Props> = ({
    parameterName,
    options,
    dispatchFn,
    isChecked,
}: Props) => {
    // const [something, setSomething] = useState(props.something);

    const dispatch = useDispatch();

    return (
        <>
            <div className="items-center justify-center mb-2 min-h-1 px-1">
                <span className="text-xs font-bold mr-1">{parameterName}</span>
                <div className="flex flex-row flex-wrap">
                    {options.map((opt) => (
                        <div
                            className="font-xs text-small-caps mr-2"
                            key={`keyboard-frame-color-${opt}-option`}
                        >
                            <input
                                onChange={() => dispatch(dispatchFn(opt))}
                                checked={isChecked(opt)}
                                className="mr-1"
                                type="checkbox"
                            />
                            <span>{opt}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SidebarParameter;
