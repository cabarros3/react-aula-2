type ListProps = {
  itemName1: string;
  itemName2: string;
};

export function ListaItens(props: ListProps) {
  return (
    <div className="border pt-5 pb-5 mr-5 rounded-3xl shadow-xl mb-10">
      <div className="font-bold text-lg p-5">
        <span>Questão 4</span>
      </div>
      <div className="m-5 flex flex-row justify-center">
        <ul>
          <li>{props.itemName1}</li>
          <li>{props.itemName2}</li>
          <li>{props.itemName1}</li>
          <li>{props.itemName2}</li>
        </ul>
      </div>
    </div>
  );
}
