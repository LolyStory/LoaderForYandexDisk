import { FC } from "react";
import "./styles.css";
import { Login } from "../Login/Login";
import { putLoadingUrl } from "../../Api/putLoadingUrl";

type Loader = {
    tokenState: string;
    setTokenState: (params: string) => void;
    hideState: boolean;
    setHideState: (params: boolean) => void;
    linkState: string[];
    fileState: File[] | null;
    setFileState: (params: any) => void;
};

export const Loader: FC<Loader> = ({
    tokenState,
    setTokenState,
    hideState,
    setHideState,
    linkState,
    fileState,
    setFileState,
}) => {
    return (
        <div className="loaderWindow">
            <label className="loadingInput">
                <input
                    type="file"
                    multiple
                    onChange={(event) => {
                        //console.log(event.target.files);
                        setFileState(event.target.files);
                    }}
                />
                <span>Выберите файлы</span>
            </label>

            <button
                className="loadingButton"
                onClick={() => {
                    if (fileState) {
                        putLoadingUrl(linkState, fileState);
                    }
                }}
            >
                Загрузить
            </button>

            <Login
                tokenState={tokenState}
                setTokenState={setTokenState}
                hideState={hideState}
                setHideState={setHideState}
            />
        </div>
    );
};
