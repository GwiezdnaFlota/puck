import { Config } from "@measured/puck";

type Components = {
    HeadingBlock: {
        title: string;
    };
};

export const configPuck: Config<{}, Components> = {
    components: {
        HeadingBlock: {
            fields: {
                children: {
                    type: "text",
                },
            },
            render: ({ children }: { children: React.ReactNode }) => {
                return <h1>{children}</h1>;
            },
        },
    },
};