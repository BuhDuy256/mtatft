import svgPaths from "./svg-u0jb3sa6q4";

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[20px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px] whitespace-pre">Team Compositions</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p29ef6f00} fill="var(--fill-0, #EAF6FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-[4px] pr-0 py-0 relative shrink-0" data-name="Margin">
      <Component />
    </div>
  );
}

function Container1() {
  return (
    <div className="box-border content-stretch flex h-[48px] items-center justify-center pb-[16px] pt-[4px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container />
      <Margin />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[1436.4px] overflow-clip top-[-1.5px]" data-name="Label">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[0.1125px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17.25px] whitespace-pre">Sort by</p>
      </div>
    </div>
  );
}

function ButtonListbox() {
  return (
    <div className="basis-0 grow min-h-[32px] min-w-[40px] relative shrink-0" data-name="Button listbox">
      <div className="min-h-inherit min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start min-h-inherit min-w-inherit pb-[5px] pl-0 pr-[24px] pt-[4px] relative w-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[23px] whitespace-pre">Avg. Place</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute h-[24px] left-0 top-[8px] w-[100px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.7)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[23px]">1</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#3b3b3b] bottom-0 content-stretch flex flex-col items-start left-0 opacity-0 overflow-clip right-0" data-name="Input">
      <Container2 />
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute right-0 size-[24px] top-[4px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d="M7 10L12 15L17 10H7Z" fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Container">
      <ButtonListbox />
      <HorizontalBorder />
      <Input />
      <Component3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[16px] px-0 relative shrink-0" data-name="Container">
      <Label />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">Filters:</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-50 overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[0.15px] w-full">
        <p className="leading-[normal]">Add Filter</p>
      </div>
    </div>
  );
}

function Combobox() {
  return (
    <div className="basis-0 grow h-[31px] min-h-px min-w-[34px] relative shrink-0" data-name="Combobox">
      <div className="min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[31px] items-start min-w-inherit pl-0 pr-[4px] py-[6px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute h-[24px] left-0 top-[8px] w-[200px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.7)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d="M7 10L12 15L17 10H7Z" fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[14px] shrink-0" data-name="Component 2">
      <Component4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[-2px] top-[2px]" data-name="Container">
      <Component1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-center flex flex-wrap gap-0 items-center justify-center pb-px pl-0 pr-[30px] pt-0 relative w-full">
          <Combobox />
          <HorizontalBorder1 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-0 relative shrink-0" data-name="Container">
      <Container5 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container10 />
    </div>
  );
}

function BackgroundShadow() {
  return <div className="bg-[#e0e0e0] rounded-[8px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)] shrink-0 size-[16px]" data-name="Background+Shadow" />;
}

function Component2() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[4px] rounded-[12px] top-0" data-name="Component 3">
      <BackgroundShadow />
      <div className="absolute bg-white left-[-24px] opacity-0 rounded-[2.5px] size-[24px] top-0" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2.5px]" />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="box-border content-stretch flex h-[24px] items-start justify-center overflow-clip p-[7px] relative shrink-0 w-[40px] z-[2]" data-name="Container">
      <div className="basis-0 bg-white grow h-full min-h-px min-w-px opacity-30 rounded-[7px] shrink-0" data-name="Background" />
      <Component2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[16px] text-nowrap tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">Show low play rate compositions</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute bottom-0 content-stretch flex isolate items-center left-[-11px] top-0" data-name="Label">
      <Container12 />
      <Container13 />
    </div>
  );
}

function LabelMargin() {
  return (
    <div className="h-full relative shrink-0 w-[283.73px]" data-name="Label:margin">
      <Label1 />
    </div>
  );
}

function BackgroundShadow1() {
  return <div className="bg-[#e0e0e0] rounded-[8px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)] shrink-0 size-[16px]" data-name="Background+Shadow" />;
}

function Component5() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[4px] rounded-[12px] top-0" data-name="Component 3">
      <BackgroundShadow1 />
      <div className="absolute bg-white left-[-24px] opacity-0 rounded-[2.5px] size-[24px] top-0" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2.5px]" />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="box-border content-stretch flex h-[24px] items-start justify-center overflow-clip p-[7px] relative shrink-0 w-[40px] z-[2]" data-name="Container">
      <div className="basis-0 bg-white grow h-full min-h-px min-w-px opacity-30 rounded-[7px] shrink-0" data-name="Background" />
      <Component5 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[16px] text-nowrap tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">Expand all subcomps</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute bottom-0 content-stretch flex isolate items-center left-[-11px] top-0" data-name="Label">
      <Container14 />
      <Container15 />
    </div>
  );
}

function LabelMargin1() {
  return (
    <div className="h-full relative shrink-0 w-[199.69px]" data-name="Label:margin">
      <Label2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-wrap gap-[20px] h-[40px] items-center justify-center pb-0 pl-[6px] pr-0 pt-[16px] relative w-full">
          <LabelMargin />
          <LabelMargin1 />
        </div>
      </div>
    </div>
  );
}

export default function Overlay() {
  return (
    <div className="bg-[#7f886a] relative rounded-[4px] size-full" data-name="Overlay">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
          <Container1 />
          <Container11 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}