type TopicCard = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  item: TopicCard;
  isOpen: boolean;
  onNext: () => void;
};

export function TopicCard({ item, onNext, isOpen }: Props) {
  return (
    <>
      <button onClick={() => onNext()} key={item.id}>
        {item.title}
      </button>
      <p className={isOpen ? 'show' : 'hidden'}>{item.content}</p>
    </>
  );
}
