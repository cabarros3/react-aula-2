type ImageProp = {
    imageUrl: string,
    imageAlt: string,
}


export function Imagem(props: ImageProp){
    return(
        <div className="m-5 border p-5">
            <div className="font-bold text-lg p-5">
                <span>Questão 5</span>
            </div>
            <div>
                <img src={props.imageUrl} className="h-28 w-28 p-5" alt="" />
            </div>
        </div>
    )
}