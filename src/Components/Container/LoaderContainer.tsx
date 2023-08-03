import React, { FC, useCallback, useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { getLoadingUrl } from "../../Api/getLoadingUrl";

export const LoaderContainer: FC = () => {
    const [tokenState, setTokenState] = useState("");
    const [hideState, setHideState] = useState(true);
    const [fileState, setFileState] = useState<File[] | null>(null);
    const [linkState, setLinkState] = useState<string[]>([]);

    const generateLinkState = useCallback(
        (fileState: any[]) => {
            const currentLinkState: any[] = [];

            for (let i = 0; i < fileState.length; i++) {
                currentLinkState.push(getLoadingUrl(fileState[i], tokenState));
            }

            Promise.all(currentLinkState).then((value) => {
                setLinkState(value);
                // console.log(value);
            });
        },
        [tokenState, linkState, fileState]
    );

    useEffect(() => {
        if (!fileState) {
            return;
        }
        generateLinkState(fileState);
    }, [fileState]);

    //console.log(linkState);
    return (
        <div>
            <Loader
                tokenState={tokenState}
                setTokenState={setTokenState}
                setHideState={setHideState}
                hideState={hideState}
                linkState={linkState}
                fileState={fileState}
                setFileState={setFileState}
            />
        </div>
    );
};
