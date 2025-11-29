function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-[rgba(255,255,255,0.87)] text-nowrap tracking-[0.06px] uppercase">
        <p className="leading-[16px] text-[14px] whitespace-pre">Top Comps</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="box-border content-stretch flex h-[44px] items-center justify-center min-w-[80px] px-[16px] py-0 relative shrink-0" data-name="Component 4">
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

function Component1() {
  return (
    <div className="box-border content-stretch flex h-[44px] items-center justify-center min-w-[80px] px-[18px] py-0 relative shrink-0" data-name="Component 4">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="absolute bg-[#9e8cfc] bottom-[-4px] h-[2px] left-[-5px] w-[54.45px]" data-name="Horizontal Divider" />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-[rgba(255,255,255,0.87)] text-nowrap uppercase">
        <p className="leading-[16px] text-[14px] whitespace-pre">Items</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#443592] box-border content-stretch flex h-[44px] items-center justify-center min-w-[80px] pl-[17.77px] pr-[17.78px] py-0 relative shrink-0" data-name="Component 6">
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
    <div className="box-border content-stretch flex h-[44px] items-center justify-center min-w-[80px] px-[16px] py-0 relative shrink-0" data-name="Component 4">
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Container">
      <Component />
      <Component1 />
      <Component2 />
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
    <div className="bg-[#392c72] content-stretch flex flex-col items-center relative size-full" data-name="Background">
      <Nav />
    </div>
  );
}