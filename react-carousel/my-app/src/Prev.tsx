import { FaChevronLeft } from 'react-icons/fa6';
type PrevProp = {
  onPrev: () => void;
};

export function Prev({ onPrev }: PrevProp) {
  return (
    <div className="Prev column-half">
      <FaChevronLeft onClick={onPrev} className="previous-image" />
    </div>
  );
}
