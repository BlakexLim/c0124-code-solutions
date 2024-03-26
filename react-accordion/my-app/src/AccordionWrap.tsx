import { TopicCard } from './TopicCard';
import './App';
import { useState } from 'react';

type TopicProp = {
  id: number;
  title: string;
  content: string;
};
type Props = {
  details: TopicProp[];
};

export function AccordionWrap({ details }: Props) {
  const [open, setOpen] = useState(0);
  function handleClick(topicId: number): void {
    if (topicId === open) {
      setOpen(0);
    } else {
      setOpen(topicId);
    }
  }

  const detailArr = details.map((detail) => (
    <TopicCard
      onNext={() => handleClick(detail.id)}
      key={detail.id}
      item={detail}
      isOpen={open === detail.id}
    />
  ));
  return <>{detailArr}</>;
}
