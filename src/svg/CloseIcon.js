export default function CloseIcon({width, height}) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width*1.15} ${height*1.15}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L7.5 7.5M7.5 7.5L14 1M7.5 7.5L14 14M7.5 7.5L1 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
