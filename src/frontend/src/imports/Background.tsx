import svgPaths from "./svg-ukz8cm9dfo";

function Link() {
  return (
    <div className="box-border content-stretch flex h-[48px] items-center justify-center min-w-[52px] pb-[16.5px] pt-[15.5px] px-[20px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[0px] text-center text-nowrap tracking-[0.07px] uppercase">
        <p className="leading-[16px] text-[15px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 top-0" data-name="Component 6">
      <Link />
    </div>
  );
}

function Component() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[24px]" data-name="Component 1">
      <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(234, 246, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
            <path d="M0 0L5 5L10 0H0Z" fill="var(--fill-0, #EAF6FF)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[-1px] overflow-clip size-[24px] top-0" data-name="SVG">
      <Component />
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="h-[24px] relative shrink-0 w-[8px]" data-name="SVG:margin">
      <Svg />
    </div>
  );
}

function Link1() {
  return (
    <div className="box-border content-stretch flex h-[48px] items-center justify-center min-w-[52px] pl-[12px] pr-[20px] py-0 relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[0px] text-center text-nowrap uppercase">
        <p className="leading-[16px] text-[15px] whitespace-pre">Stats</p>
      </div>
      <SvgMargin />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0" data-name="Container">
      <Link1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-center left-[86.44px] top-0" data-name="Margin">
      <Container />
    </div>
  );
}

function Component5() {
  return <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[171.61px] top-0" data-name="Component 6" />;
}

function Link2() {
  return (
    <div className="box-border content-stretch flex h-[48px] items-center justify-center min-w-[52px] pb-[16.5px] pt-[15.5px] px-[20px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-center text-nowrap tracking-[0.07px] uppercase">
        <p className="leading-[16px] whitespace-pre">Players</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[155.5px] top-[calc(50%+1px)] translate-y-[-50%]" data-name="Component 6">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="box-border content-stretch flex h-[48px] items-center justify-center min-w-[52px] pb-[16.5px] pt-[15.5px] px-[20px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[0px] text-center text-nowrap tracking-[0.07px] uppercase">
        <p className="leading-[16px] text-[15px] whitespace-pre">Team Builder</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-[265.5px] top-px" data-name="Component 6">
      <Link3 />
    </div>
  );
}

function Component8() {
  return <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[534.56px] top-0" data-name="Component 6" />;
}

function Component9() {
  return <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[666.8px] top-0" data-name="Component 6" />;
}

function Nav() {
  return (
    <div className="h-full relative shrink-0 w-[803.83px]" data-name="Nav">
      <Component4 />
      <Margin />
      <Component5 />
      <Component6 />
      <Component7 />
      <Component8 />
      <Component9 />
    </div>
  );
}

function Container1() {
  return <div className="absolute left-[48px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Container" />;
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d={svgPaths.p18ab9080} fill="var(--fill-0, #EAF6FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[126px] top-1/2 translate-y-[-50%]" data-name="Container">
      <Component2 />
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d={svgPaths.p1898c200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[92.66px] p-[6px] rounded-[18px] top-1/2 translate-y-[-50%]" data-name="Component 2">
      <Component3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[150px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Component1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[199.17px] items-center min-h-[48px] relative shrink-0 w-[1153px]" data-name="Container">
      <div className="flex flex-row items-center self-stretch">
        <Nav />
      </div>
      <Container3 />
    </div>
  );
}

export default function Background() {
  return (
    <div className="bg-[#555555] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="Background">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center pl-0 pr-[8px] py-0 relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}