import Image from "next/image";

type ImageProp = {
  imageUrl: string;
  imageAlt: string;
};

export function Imagem(props: ImageProp) {
  return (
    <div className="border pt-5 pb-5 ml-5 rounded-3xl shadow-xl">
      <div className="font-bold text-lg p-5">
        <span>Questão 5</span>
      </div>
      <div className="m-5 flex flex-row justify-center">
        <Image
          src={props.imageUrl}
          alt={props.imageAlt}
          width={212}
          height={212}
        />
      </div>
    </div>
  );
}
