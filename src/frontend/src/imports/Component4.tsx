import svgPaths from "./svg-1j0m78qahy";
import imgMalzahar from "figma:asset/f205fdb6768ad40ab1d41db67b99b1980d1c006a.png";
import imgNeeko from "figma:asset/83573ee8a24bf820389a42af2ef6830fdaba5706.png";
import imgRammus from "figma:asset/5732cb172280dfc57c4272e6d5536acc5e5a1bc0.png";
import imgKSante from "figma:asset/851fa68d97c75d46cc3f204399dfd500e3442547.png";
import imgSeraphine from "figma:asset/6ac7fb754a1f59dc2ac1901766e63b2a3e55eaa7.png";

function Component() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Component 1">
          <path d={svgPaths.p8d4c480} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tft15ProdigyWSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[22px]" data-name="tft15_prodigy_w.svg fill">
      <Component />
    </div>
  );
}

function Prodigy() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[294.47px] overflow-clip relative shrink-0 w-[22px]" data-name="Prodigy 0">
      <Tft15ProdigyWSvgFill />
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-[4px] pr-0 py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">{`Prodigy Malzahar & Rammus`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Prodigy />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[30px] items-center relative shrink-0" data-name="Container">
      <Container1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p3f88aa80} fill="var(--fill-0, #52A9FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[6px] relative rounded-[16px] shrink-0" data-name="Component 2">
      <Component2 />
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p1b8fa9d0} fill="var(--fill-0, #52A9FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component5() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[6px] relative rounded-[16px] shrink-0" data-name="Component 2">
      <Component4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Component5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0" data-name="Container">
      <Component1 />
      <Container3 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Margin">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[89.53px] items-end relative shrink-0 w-[448px]" data-name="Container">
      <Container2 />
      <div className="flex flex-row items-end self-stretch">
        <Margin />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-[5px] py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Core</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0 w-[218px]" data-name="Container">
      <div className="basis-0 bg-white grow h-px min-h-px min-w-px shrink-0" data-name="Horizontal Divider" />
      <Container6 />
      <div className="basis-0 bg-white grow h-px min-h-px min-w-px shrink-0" data-name="Horizontal Divider" />
    </div>
  );
}

function Container8() {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-[5px] py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Flex</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0 w-[218px]" data-name="Container">
      <div className="basis-0 bg-white grow h-px min-h-px min-w-px shrink-0" data-name="Horizontal Divider" />
      <Container8 />
      <div className="basis-0 bg-white grow h-px min-h-px min-w-px shrink-0" data-name="Horizontal Divider" />
    </div>
  );
}

function Margin1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center pl-[12px] pr-0 py-0 relative self-stretch shrink-0 w-[230px]" data-name="Margin">
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="box-border content-stretch flex items-start justify-center pb-0 pt-[4px] px-0 relative shrink-0 w-[448px]" data-name="Container">
      <Container7 />
      <Margin1 />
    </div>
  );
}

function Malzahar() {
  return (
    <div className="max-w-[47px] pointer-events-none relative rounded-[4px] shrink-0 size-[47px]" data-name="Malzahar">
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMalzahar} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]" />
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute h-[17px] left-[1.5px] top-[-7px] w-[44px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 17">
        <g id="Component 1">
          <path d={svgPaths.p1a4c0a00} fill="var(--fill-0, #607D8B)" fillOpacity="0.65" id="Vector" />
          <path d={svgPaths.p2e13f800} fill="var(--fill-0, #EAF6FF)" id="Vector_2" />
          <path d={svgPaths.p14d8e670} fill="var(--fill-0, #EAF6FF)" id="Vector_3" />
          <path d={svgPaths.p2000ff00} fill="var(--fill-0, #EAF6FF)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return <div className="absolute bottom-[-7px] content-stretch flex items-start justify-center left-[-4px] w-[55px]" data-name="Container" />;
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col h-[47px] items-center relative shrink-0" data-name="Container">
      <Malzahar />
      <Component6 />
      <Container11 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center px-[5px] py-0 relative self-stretch shrink-0" data-name="Margin">
      <Container12 />
    </div>
  );
}

function Neeko() {
  return (
    <div className="max-w-[47px] pointer-events-none relative rounded-[4px] shrink-0 size-[47px]" data-name="Neeko">
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgNeeko} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]" />
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute h-[17px] left-[1.5px] top-[-7px] w-[44px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 17">
        <g id="Component 1">
          <path d={svgPaths.p1a4c0a00} fill="var(--fill-0, #607D8B)" fillOpacity="0.65" id="Vector" />
          <path d={svgPaths.p2e13f800} fill="var(--fill-0, #EAF6FF)" id="Vector_2" />
          <path d={svgPaths.p14d8e670} fill="var(--fill-0, #EAF6FF)" id="Vector_3" />
          <path d={svgPaths.p2000ff00} fill="var(--fill-0, #EAF6FF)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col h-[47px] items-center relative shrink-0" data-name="Container">
      <Neeko />
      <Component7 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center px-[5px] py-0 relative self-stretch shrink-0" data-name="Margin">
      <Container13 />
    </div>
  );
}

function Rammus() {
  return (
    <div className="max-w-[47px] pointer-events-none relative rounded-[4px] shrink-0 size-[47px]" data-name="Rammus">
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRammus} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]" />
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute h-[17px] left-[1.5px] top-[-7px] w-[44px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 17">
        <g id="Component 1">
          <path d={svgPaths.p1a4c0a00} fill="var(--fill-0, #607D8B)" fillOpacity="0.65" id="Vector" />
          <path d={svgPaths.p2e13f800} fill="var(--fill-0, #FFCD4F)" fillOpacity="0.93" id="Vector_2" />
          <path d={svgPaths.p14d8e670} fill="var(--fill-0, #FFCD4F)" fillOpacity="0.93" id="Vector_3" />
          <path d={svgPaths.p2000ff00} fill="var(--fill-0, #FFCD4F)" fillOpacity="0.93" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-[47px] items-center relative shrink-0" data-name="Container">
      <Rammus />
      <Component8 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center px-[5px] py-0 relative self-stretch shrink-0" data-name="Margin">
      <Container14 />
    </div>
  );
}

function KSante() {
  return (
    <div className="max-w-[47px] pointer-events-none relative rounded-[4px] shrink-0 size-[47px]" data-name="K\'Sante">
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgKSante} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(222,14,189,0.88)] border-solid inset-0 rounded-[4px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[47px] items-center relative shrink-0" data-name="Container">
      <KSante />
    </div>
  );
}

function Margin5() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center px-[5px] py-0 relative self-stretch shrink-0" data-name="Margin">
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Margin2 />
      <Margin3 />
      <Margin4 />
      <Margin5 />
    </div>
  );
}

function Malzahar1() {
  return (
    <div className="max-w-[47px] pointer-events-none relative rounded-[4px] shrink-0 size-[47px]" data-name="Malzahar">
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMalzahar} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]" />
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute h-[17px] left-[1.5px] top-[-7px] w-[44px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 17">
        <g id="Component 1">
          <path d={svgPaths.p1a4c0a00} fill="var(--fill-0, #607D8B)" fillOpacity="0.65" id="Vector" />
          <path d={svgPaths.p2e13f800} fill="var(--fill-0, #EAF6FF)" id="Vector_2" />
          <path d={svgPaths.p14d8e670} fill="var(--fill-0, #EAF6FF)" id="Vector_3" />
          <path d={svgPaths.p2000ff00} fill="var(--fill-0, #EAF6FF)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col h-[47px] items-center relative shrink-0" data-name="Container">
      <Malzahar1 />
      <Component9 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center px-[5px] py-0 relative self-stretch shrink-0" data-name="Margin">
      <Container17 />
    </div>
  );
}

function Rammus1() {
  return (
    <div className="max-w-[47px] pointer-events-none relative rounded-[4px] shrink-0 size-[47px]" data-name="Rammus">
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRammus} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]" />
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute h-[17px] left-[1.5px] top-[-7px] w-[44px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 17">
        <g id="Component 1">
          <path d={svgPaths.p1a4c0a00} fill="var(--fill-0, #607D8B)" fillOpacity="0.65" id="Vector" />
          <path d={svgPaths.p2e13f800} fill="var(--fill-0, #FFCD4F)" fillOpacity="0.93" id="Vector_2" />
          <path d={svgPaths.p14d8e670} fill="var(--fill-0, #FFCD4F)" fillOpacity="0.93" id="Vector_3" />
          <path d={svgPaths.p2000ff00} fill="var(--fill-0, #FFCD4F)" fillOpacity="0.93" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col h-[47px] items-center relative shrink-0" data-name="Container">
      <Rammus1 />
      <Component10 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center px-[5px] py-0 relative self-stretch shrink-0" data-name="Margin">
      <Container18 />
    </div>
  );
}

function KSante1() {
  return (
    <div className="max-w-[47px] pointer-events-none relative rounded-[4px] shrink-0 size-[47px]" data-name="K\'Sante">
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgKSante} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(222,14,189,0.88)] border-solid inset-0 rounded-[4px]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col h-[47px] items-center relative shrink-0" data-name="Container">
      <KSante1 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center px-[5px] py-0 relative self-stretch shrink-0" data-name="Margin">
      <Container19 />
    </div>
  );
}

function Seraphine() {
  return (
    <div className="max-w-[47px] pointer-events-none relative rounded-[4px] shrink-0 size-[47px]" data-name="Seraphine">
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSeraphine} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,196,48,0.88)] border-solid inset-0 rounded-[4px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col h-[47px] items-center relative shrink-0" data-name="Container">
      <Seraphine />
    </div>
  );
}

function Margin9() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center px-[5px] py-0 relative self-stretch shrink-0" data-name="Margin">
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Margin6 />
      <Margin7 />
      <Margin8 />
      <Margin9 />
    </div>
  );
}

function Container22() {
  return (
    <div className="box-border content-stretch flex items-start pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start pl-0 pr-[6px] py-[16px] relative shrink-0" data-name="Container">
      <Container5 />
      <Container10 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[4px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(234,246,255,0.7)] text-center w-full">
        <p className="leading-[18px]">Play Rate</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[18px] text-center w-full">
        <p className="leading-[18px]">0.10</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[69.55px] top-0" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[4px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(234,246,255,0.7)] text-center w-full">
        <p className="leading-[18px]">Place</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[18px] text-center w-full">
        <p className="leading-[18px]">3.44</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[94.45px] right-0 top-0" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[4px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(234,246,255,0.7)] text-center w-full">
        <p className="leading-[18px]">Top 4 %</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[18px] text-center w-full">
        <p className="leading-[18px]">68.1</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[69.55px] top-[52px]" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[4px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(234,246,255,0.7)] text-center w-full">
        <p className="leading-[18px]">Win %</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[18px] text-center w-full">
        <p className="leading-[18px]">27.0</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[94.45px] right-0 top-[52px]" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container29 />
      <Container32 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150px]" data-name="Container">
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="Container">
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="box-border content-stretch flex h-full items-start pl-[12px] pr-0 py-[16px] relative shrink-0" data-name="Container">
      <Container38 />
    </div>
  );
}

export default function Component3() {
  return (
    <div className="relative size-full" data-name="Component 4">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative size-full">
          <div className="flex flex-row items-center self-stretch">
            <Container23 />
          </div>
          <div className="flex flex-row items-center self-stretch">
            <Container39 />
          </div>
        </div>
      </div>
    </div>
  );
}