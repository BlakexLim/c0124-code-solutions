import { FaChevronRight } from 'react-icons/fa6';
type NextProp = {
  onNext: () => void;
};

export function Next({ onNext }: NextProp) {
  return (
    <div className="Next column-half">
      <FaChevronRight onClick={onNext} />
    </div>
  );
}
