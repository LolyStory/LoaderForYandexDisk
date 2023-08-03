import { FC } from "react";
import "./styles.css";

type Login = {
    tokenState: string;
    setTokenState: (params: string) => void;
    hideState: boolean;
    setHideState: (params: boolean) => void;
};

export const Login: FC<Login> = ({
    tokenState,
    setTokenState,
    hideState,
    setHideState,
}) => {
    if (hideState) {
        return (
            <div className={`loginWindow `}>
                <div className="text-login">Введите токен OAuth</div>
                <input
                    className="inputToken"
                    type="text"
                    value={tokenState}
                    onChange={(event) => setTokenState(event.target.value)}
                />
                <button
                    className="saveToken"
                    onClick={() => setHideState(false)}
                >
                    Сохранить
                </button>
            </div>
        );
    } else return null;
};
