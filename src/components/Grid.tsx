import ListGroup from "./ListGroup";

interface Props {
  header: string;
  items: string[];
}

const Grid = ({ header, items }: Props) => {
  return (
    <>
      <h3 className="p-2">{header}</h3>
        <div className="container text-center">
          <div className="row row-cols-4">
            {items.map((item) => (
              <div className="col border">
                <ListGroup
                  link="$"
                  header={item}
                  items={["Τοποθεσια:", "Κόστος ανά βράδυ:", "Αριθμός Ατόμων:"]}
                ></ListGroup>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Grid;
