

export const getLoadingUrl = async (file: any, tokenState: any,) => {
    const urlGet = `https://cloud-api.yandex.net/v1/disk/resources/upload?path=${file.name}&overwrite=true`;


    const notification = (
        await fetch(urlGet, {
            method: "GET",
            headers: {
                Authorization: `OAuth ${tokenState}`
            }
        },)
    ).json().then(
        async (value) => {
          //  console.log(value)
            return value.href;
        }
    )

    return notification;
}