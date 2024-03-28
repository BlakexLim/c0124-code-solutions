import { type TopicProp } from './AccordionWrap';

type Props = {
  item: TopicProp;
  onNext: () => void;
  isOpen: boolean;
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
