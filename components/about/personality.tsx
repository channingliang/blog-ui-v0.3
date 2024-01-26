import { Progress } from "@nextui-org/react";

const data = [
    {
        test: "精力",
        result: "外向",
        value: 58,
        color: "to-[#4298B4]",
    },
    {
        test: "精神",
        result: "现实",
        value: 87,
        color: "to-[#E4AE3A]",
    },
    {
        test: "判断方式",
        result: "感受",
        value: 58,
        color: "to-[#33A474]",
    },
    {
        test: "应对方式",
        result: "展望",
        value: 60,
        color: "to-[#88619A]",
    },
    {
        test: "身份特征",
        result: "坚决",
        value: 94,
        color: "to-[#F25E62]",
    }
]

const PersonalityForm = () => {
    return (
        <div className={"h-full flex flex-col justify-between py-2"}>
            {
                data.map((item, index) => (
                    <Progress
                        key={index}
                        label={(
                            <div className={"flex flex-wrap items-baseline"}>
                                <span className={"w-20 text-justify text-foreground/80"}>{item.test}：</span>
                                <span className={"font-black text-lg text-foreground"}>{item.result}</span>
                            </div>
                        )}
                        value={item.value}
                        maxValue={100}
                        showValueLabel={true}
                        classNames={{
                            base: "max-w-md",
                            track: "h-[7px] drop-shadow-md border-1 border-default",
                            indicator: `bg-gradient-to-r from-white ${item.color}`,
                        }}
                    />
                ))
            }
        </div>
    )
}

export default PersonalityForm;
