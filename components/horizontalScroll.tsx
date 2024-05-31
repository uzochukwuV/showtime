import React from 'react';
import { ScrollMenu, VisibilityContext, publicApiType } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import EventCard from './eventCard';
import Image from 'next/image';



export default function HorizontalScroll(props: {eventlist: string[]}) {
  const {eventlist: items} = props
  const [selected, setSelected] = React.useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id),
      );
    };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} scrollContainerClassName=' scrollContainer p-4' wrapperClassName=' h-[400px]' >
      {items.map((id, n) => (
        <EventCard key={n} image={id} />

      ))}
    </ScrollMenu>
  );
}

const LeftArrow = () => {
  const visibility = React.useContext< publicApiType>(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible('first', true);
  return (
    <div className="absolute z-20 w-20 h-[400px] flex justify-center items-center bg-gradient-to-r from-[#1c1c20] to-transparent">
        <button
      disabled={isFirstItemVisible}
      onClick={()=> {
        console.log(isFirstItemVisible);
        visibility.scrollPrev()
        
      }}
      className="h-20 bg-transparent "
    >
    {
      !isFirstItemVisible && <Image src={"/svg/arrow-right.svg"} height={20} width={20} alt='' />
    }
    </button>
    </div>
  );
};

const RightArrow = () => {
  const visibility = React.useContext < publicApiType > (VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible('last', false);
  return (
    <div className="absolute h-[400px] flex justify-center items-center right-0 z-20 w-20 bg-gradient-to-r to-[#1c1c20] from-transparent">
    <button
      disabled={isLastItemVisible}
      onClick={()=>visibility.scrollNext()}
      className="h-20"
    >
     {
      !isLastItemVisible && <Image src={"/svg/arrow-left.svg"} height={20} width={20} alt='' />
     }
    </button>
    </div>
  );
};

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext < publicApiType > (VisibilityContext);
  const visible = visibility.useIsVisible(itemId, true);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: '160px',
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(visible)}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: '200px',
        }}
      />
    </div>
  );
}