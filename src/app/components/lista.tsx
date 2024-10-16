type ListProps = {
  itemName1: string;
  itemName2: string;
};

export function ListaItens({ itemName1, itemName2 }: ListProps) {
  return (
    <div className="border pt-5 pb-5 mr-5 rounded-3xl shadow-xl mb-10">
      <div className="font-bold text-lg p-5">
        <span>Questão 4</span>
      </div>
      <div className="m-5 flex flex-row justify-center">
        <ul>
          <li>{itemName1}</li>
          <li>{itemName2}</li>
          <li>{itemName1}</li>
          <li>{itemName2}</li>
        </ul>
      </div>
    </div>
  );
}
