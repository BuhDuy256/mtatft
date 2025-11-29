function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="absolute bottom-[-4px] h-[2px] left-[-5px] w-[98.56px]" data-name="Horizontal Divider" />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-[rgba(255,255,255,0.87)] text-nowrap uppercase">
        <p className="leading-[16px] text-[14px] whitespace-pre">Top Comps</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="box-border content-stretch flex h-[44px] items-center justify-center min-w-[80px] px-[16px] py-0 relative shrink-0" data-name="Component 7">
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-[rgba(255,255,255,0.87)] text-nowrap tracking-[0.06px] uppercase">
        <p className="leading-[16px] text-[14px] whitespace-pre">Units</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="box-border content-stretch flex h-[44px] items-center justify-center min-w-[80px] px-[18px] py-0 relative shrink-0" data-name="Component 5">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-[rgba(255,255,255,0.87)] text-nowrap tracking-[0.06px] uppercase">
        <p className="leading-[16px] text-[14px] whitespace-pre">Items</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="box-border content-stretch flex h-[44px] items-center justify-center min-w-[80px] pl-[17.85px] pr-[17.84px] py-0 relative shrink-0" data-name="Component 5">
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-[rgba(255,255,255,0.87)] text-nowrap tracking-[0.06px] uppercase">
        <p className="leading-[16px] text-[14px] whitespace-pre">Traits</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="box-border content-stretch flex h-[44px] items-center justify-center min-w-[80px] px-[16px] py-0 relative shrink-0" data-name="Component 5">
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Container">
      <Component2 />
      <Component />
      <Component1 />
      <Component3 />
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1153px]" data-name="Nav">
      <Container4 />
    </div>
  );
}

export default function Background() {
  return (
    <div className="bg-[#555555] box-border content-stretch flex flex-col items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="Background">
      <Nav />
    </div>
  );
}