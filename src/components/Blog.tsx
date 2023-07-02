import React from "react";

type Props = {
    blur?: boolean;
};

const Blog: React.FC<Props> = ({ blur = false }) => {
    return (
        <span className={blur ? "blur-md" : undefined}>
            <svg viewBox="0 0 200 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill="currentColor"
                    d="M69.5,-20.8C77.2,0.9,61.5,31.9,37.7,48.4C13.9,64.8,-17.9,66.6,-39.4,51.6C-61,36.6,-72.2,4.7,-63.9,-17.8C-55.6,-40.4,-27.8,-53.7,1.6,-54.2C31,-54.7,61.9,-42.4,69.5,-20.8Z"
                    transform="translate(100 100)"
                />
            </svg>
        </span>
    );
};

export default Blog;
