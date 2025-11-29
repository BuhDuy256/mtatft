import imgAatrox from "../assets/181fbae46c4a23e89091ab5c9d7e52fb7b6caf1a.png";
import imgEzreal from "../assets/8dc7eb2bb86b46bf0e74fb1b8e05f0a025e2eded.png";
import imgGaren from "../assets/0573c2f3b585b5a38b74174a5690484565ef37f7.png";
import imgGnar from "../assets/9e93d8749a9f791d6d3ae421e6c93af647f17d2a.png";
import imgKalista from "../assets/8c081b1e9e8b771e5cce71d2692bafef669aa2a2.png";
import imgKayle from "../assets/97eac428c5b9aeee17071068b51e81a88faab569.png";
import imgKennen from "../assets/bcb31bc0108c28d8fb970a58030044aba54a9c4b.png";
import imgLucian from "../assets/55862617f05ea6dbc36794fbbe3ebcae6368fc69.png";
import imgMalphite from "../assets/e4ff92224904b6b324388013db1ba81bd871e53c.png";
import imgNaafiri from "../assets/0580bd558ca12257aeea61557139a1304d69d982.png";
import imgRell from "../assets/9ab1f37ab63909b0b9ec4a1853b8ef8267f1ed4f.png";
import imgSivir from "../assets/cd24d568347df683d0200ebd8672ac6246094d10.png";
import imgSyndra from "../assets/790b82fd1553f4acd963955502638cd43abc56a1.png";
import imgZac from "../assets/cc2475fff1f6b6b450f8bdefdbc2def0147e93a5.png";

function Aatrox() {
  return (
    <div
      className="max-w-[60px] relative rounded-[4px] shrink-0 size-[60px]"
      data-name="Aatrox"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgAatrox}
        />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 z-[3]"
      data-name="Container"
    >
      <Aatrox />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="absolute h-[20px] right-[2px] rounded-tr-[8px] top-[-8px] w-[38px] z-[2]"
      data-name="Container"
    />
  );
}

function Container2() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.87)] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">Aatrox</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pb-[4px] pt-[3px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[31.8px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">1.84</p>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end pl-px pr-0 py-0 relative self-stretch shrink-0 w-[31.86px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">4.62</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-[63.66px]"
      data-name="Container"
    >
      <Container3 />
      <VerticalBorder />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[60px] items-end overflow-clip pl-[9px] pr-[3px] py-[7px] relative shrink-0 z-[1]"
      data-name="Container"
    >
      <Margin />
      <Container4 />
    </div>
  );
}

function Link() {
  return (
    <div
      className="absolute bg-[rgba(187,187,187,0.17)] box-border content-stretch flex isolate items-start left-0 p-[2px] right-[763.34px] top-0"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.35)] border-solid inset-0 pointer-events-none"
      />
      <Container />
      <Container1 />
      <Container5 />
    </div>
  );
}

function Ezreal() {
  return (
    <div
      className="max-w-[60px] relative rounded-[4px] shrink-0 size-[60px]"
      data-name="Ezreal"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgEzreal}
        />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 z-[2]"
      data-name="Container"
    >
      <Ezreal />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.87)] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">Ezreal</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pb-[4px] pt-[3px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start mr-[-0.01px] relative self-stretch shrink-0 w-[31.8px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">0.87</p>
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end mr-[-0.01px] pl-px pr-0 py-0 relative self-stretch shrink-0 w-[31.88px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">4.25</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex items-start pl-0 pr-[0.01px] py-0 relative shrink-0 w-[63.67px]"
      data-name="Container"
    >
      <Container8 />
      <VerticalBorder1 />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[60px] items-end overflow-clip pl-[9px] pr-[3px] py-[7px] relative shrink-0 z-[1]"
      data-name="Container"
    >
      <Margin1 />
      <Container9 />
    </div>
  );
}

function Link1() {
  return (
    <div
      className="absolute bg-[rgba(187,187,187,0.17)] box-border content-stretch flex isolate items-start left-[152.66px] p-[2px] right-[610.67px] top-0"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.35)] border-solid inset-0 pointer-events-none"
      />
      <Container6 />
      <Container10 />
    </div>
  );
}

function Garen() {
  return (
    <div
      className="max-w-[60px] relative rounded-[4px] shrink-0 size-[60px]"
      data-name="Garen"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgGaren}
        />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div
      className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 z-[2]"
      data-name="Container"
    >
      <Garen />
    </div>
  );
}

function Container12() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.87)] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">Garen</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pb-[4px] pt-[3px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[31.8px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">1.20</p>
      </div>
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end pl-px pr-0 py-0 relative self-stretch shrink-0 w-[31.88px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">4.47</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-[63.67px]"
      data-name="Container"
    >
      <Container13 />
      <VerticalBorder2 />
    </div>
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[60px] items-end overflow-clip pl-[9px] pr-[3px] py-[7px] relative shrink-0 z-[1]"
      data-name="Container"
    >
      <Margin2 />
      <Container14 />
    </div>
  );
}

function Link2() {
  return (
    <div
      className="absolute bg-[rgba(187,187,187,0.17)] box-border content-stretch flex isolate items-start left-[305.33px] p-[2px] right-[458px] top-0"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.35)] border-solid inset-0 pointer-events-none"
      />
      <Container11 />
      <Container15 />
    </div>
  );
}

function Gnar() {
  return (
    <div
      className="max-w-[60px] relative rounded-[4px] shrink-0 size-[60px]"
      data-name="Gnar"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgGnar}
        />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 z-[2]"
      data-name="Container"
    >
      <Gnar />
    </div>
  );
}

function Container17() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.87)] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">Gnar</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pb-[4px] pt-[3px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[31.8px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">0.43</p>
      </div>
    </div>
  );
}

function VerticalBorder3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end pl-px pr-0 py-0 relative self-stretch shrink-0 w-[31.86px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">4.76</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-[63.66px]"
      data-name="Container"
    >
      <Container18 />
      <VerticalBorder3 />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[60px] items-end overflow-clip pl-[9px] pr-[3px] py-[7px] relative shrink-0 z-[1]"
      data-name="Container"
    >
      <Margin3 />
      <Container19 />
    </div>
  );
}

function Link3() {
  return (
    <div
      className="absolute bg-[rgba(187,187,187,0.17)] box-border content-stretch flex isolate items-start left-[458px] p-[2px] right-[305.34px] top-0"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.35)] border-solid inset-0 pointer-events-none"
      />
      <Container16 />
      <Container20 />
    </div>
  );
}

function Kalista() {
  return (
    <div
      className="max-w-[60px] relative rounded-[4px] shrink-0 size-[60px]"
      data-name="Kalista"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgKalista}
        />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 z-[2]"
      data-name="Container"
    >
      <Kalista />
    </div>
  );
}

function Container22() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.87)] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">Kalista</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pb-[4px] pt-[3px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start mr-[-0.01px] relative self-stretch shrink-0 w-[31.8px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">0.29</p>
      </div>
    </div>
  );
}

function VerticalBorder4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end mr-[-0.01px] pl-px pr-0 py-0 relative self-stretch shrink-0 w-[31.88px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">4.49</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div
      className="box-border content-stretch flex items-start pl-0 pr-[0.01px] py-0 relative shrink-0 w-[63.67px]"
      data-name="Container"
    >
      <Container23 />
      <VerticalBorder4 />
    </div>
  );
}

function Container25() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[60px] items-end overflow-clip pl-[9px] pr-[3px] py-[7px] relative shrink-0 z-[1]"
      data-name="Container"
    >
      <Margin4 />
      <Container24 />
    </div>
  );
}

function Link4() {
  return (
    <div
      className="absolute bg-[rgba(187,187,187,0.17)] box-border content-stretch flex isolate items-start left-[610.66px] p-[2px] right-[152.67px] top-0"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.35)] border-solid inset-0 pointer-events-none"
      />
      <Container21 />
      <Container25 />
    </div>
  );
}

function Kayle() {
  return (
    <div
      className="max-w-[60px] relative rounded-[4px] shrink-0 size-[60px]"
      data-name="Kayle"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgKayle}
        />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div
      className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 z-[2]"
      data-name="Container"
    >
      <Kayle />
    </div>
  );
}

function Container27() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.87)] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">Kayle</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pb-[4px] pt-[3px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[31.8px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">0.45</p>
      </div>
    </div>
  );
}

function VerticalBorder5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end pl-px pr-0 py-0 relative self-stretch shrink-0 w-[31.88px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">4.53</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-[63.67px]"
      data-name="Container"
    >
      <Container28 />
      <VerticalBorder5 />
    </div>
  );
}

function Container30() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[60px] items-end overflow-clip pl-[9px] pr-[3px] py-[7px] relative shrink-0 z-[1]"
      data-name="Container"
    >
      <Margin5 />
      <Container29 />
    </div>
  );
}

function Link5() {
  return (
    <div
      className="absolute bg-[rgba(187,187,187,0.17)] box-border content-stretch flex isolate items-start left-[763.33px] p-[2px] right-0 top-0"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.35)] border-solid inset-0 pointer-events-none"
      />
      <Container26 />
      <Container30 />
    </div>
  );
}

function Kennen() {
  return (
    <div
      className="max-w-[60px] relative rounded-[4px] shrink-0 size-[60px]"
      data-name="Kennen"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgKennen}
        />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div
      className="absolute bottom-[-7px] h-[20px] left-[-1px] right-0"
      data-name="Container"
    />
  );
}

function Container32() {
  return (
    <div
      className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 z-[2]"
      data-name="Container"
    >
      <Kennen />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.87)] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">Kennen</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pb-[4px] pt-[3px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[31.8px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">0.62</p>
      </div>
    </div>
  );
}

function VerticalBorder6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end pl-px pr-0 py-0 relative self-stretch shrink-0 w-[31.86px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">4.46</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-[63.66px]"
      data-name="Container"
    >
      <Container34 />
      <VerticalBorder6 />
    </div>
  );
}

function Container36() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[60px] items-end overflow-clip pl-[9px] pr-[3px] py-[7px] relative shrink-0 z-[1]"
      data-name="Container"
    >
      <Margin6 />
      <Container35 />
    </div>
  );
}

function Link6() {
  return (
    <div
      className="absolute bg-[rgba(187,187,187,0.17)] box-border content-stretch flex isolate items-start left-0 p-[2px] right-[763.34px] top-[80px]"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.35)] border-solid inset-0 pointer-events-none"
      />
      <Container32 />
      <Container36 />
    </div>
  );
}

function Lucian() {
  return (
    <div
      className="max-w-[60px] relative rounded-[4px] shrink-0 size-[60px]"
      data-name="Lucian"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgLucian}
        />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div
      className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 z-[2]"
      data-name="Container"
    >
      <Lucian />
    </div>
  );
}

function Container38() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.87)] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">Lucian</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pb-[4px] pt-[3px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start mr-[-0.01px] relative self-stretch shrink-0 w-[31.8px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">0.39</p>
      </div>
    </div>
  );
}

function VerticalBorder7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end mr-[-0.01px] pl-px pr-0 py-0 relative self-stretch shrink-0 w-[31.88px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">4.38</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div
      className="box-border content-stretch flex items-start pl-0 pr-[0.01px] py-0 relative shrink-0 w-[63.67px]"
      data-name="Container"
    >
      <Container39 />
      <VerticalBorder7 />
    </div>
  );
}

function Container41() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[60px] items-end overflow-clip pl-[9px] pr-[3px] py-[7px] relative shrink-0 z-[1]"
      data-name="Container"
    >
      <Margin7 />
      <Container40 />
    </div>
  );
}

function Link7() {
  return (
    <div
      className="absolute bg-[rgba(187,187,187,0.17)] box-border content-stretch flex isolate items-start left-[152.66px] p-[2px] right-[610.67px] top-[80px]"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.35)] border-solid inset-0 pointer-events-none"
      />
      <Container37 />
      <Container41 />
    </div>
  );
}

function Malphite() {
  return (
    <div
      className="max-w-[60px] relative rounded-[4px] shrink-0 size-[60px]"
      data-name="Malphite"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgMalphite}
        />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div
      className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 z-[2]"
      data-name="Container"
    >
      <Malphite />
    </div>
  );
}

function Container43() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.87)] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">Malphi…</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pb-[4px] pt-[3px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[31.8px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">0.54</p>
      </div>
    </div>
  );
}

function VerticalBorder8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end pl-px pr-0 py-0 relative self-stretch shrink-0 w-[31.88px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">4.57</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-[63.67px]"
      data-name="Container"
    >
      <Container44 />
      <VerticalBorder8 />
    </div>
  );
}

function Container46() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[60px] items-end overflow-clip pl-[9px] pr-[3px] py-[7px] relative shrink-0 z-[1]"
      data-name="Container"
    >
      <Margin8 />
      <Container45 />
    </div>
  );
}

function Link8() {
  return (
    <div
      className="absolute bg-[rgba(187,187,187,0.17)] box-border content-stretch flex isolate items-start left-[305px] p-[2px] right-[458.33px] top-[80px]"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.35)] border-solid inset-0 pointer-events-none"
      />
      <Container42 />
      <Container46 />
    </div>
  );
}

function Naafiri() {
  return (
    <div
      className="max-w-[60px] relative rounded-[4px] shrink-0 size-[60px]"
      data-name="Naafiri"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgNaafiri}
        />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div
      className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 z-[2]"
      data-name="Container"
    >
      <Naafiri />
    </div>
  );
}

function Container48() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.87)] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">Naafiri</p>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pb-[4px] pt-[3px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[31.8px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">1.58</p>
      </div>
    </div>
  );
}

function VerticalBorder9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end pl-px pr-0 py-0 relative self-stretch shrink-0 w-[31.86px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">4.41</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-[63.66px]"
      data-name="Container"
    >
      <Container49 />
      <VerticalBorder9 />
    </div>
  );
}

function Container51() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[60px] items-end overflow-clip pl-[9px] pr-[3px] py-[7px] relative shrink-0 z-[1]"
      data-name="Container"
    >
      <Margin9 />
      <Container50 />
    </div>
  );
}

function Link9() {
  return (
    <div
      className="absolute bg-[rgba(187,187,187,0.17)] box-border content-stretch flex isolate items-start left-[458px] p-[2px] right-[305.34px] top-[80px]"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.35)] border-solid inset-0 pointer-events-none"
      />
      <Container47 />
      <Container51 />
    </div>
  );
}

function Rell() {
  return (
    <div
      className="max-w-[60px] relative rounded-[4px] shrink-0 size-[60px]"
      data-name="Rell"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgRell}
        />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div
      className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 z-[2]"
      data-name="Container"
    >
      <Rell />
    </div>
  );
}

function Container53() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.87)] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">Rell</p>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pb-[4px] pt-[3px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container53 />
    </div>
  );
}

function Container54() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start mr-[-0.01px] relative self-stretch shrink-0 w-[31.8px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">1.24</p>
      </div>
    </div>
  );
}

function VerticalBorder10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end mr-[-0.01px] pl-px pr-0 py-0 relative self-stretch shrink-0 w-[31.88px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">4.58</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div
      className="box-border content-stretch flex items-start pl-0 pr-[0.01px] py-0 relative shrink-0 w-[63.67px]"
      data-name="Container"
    >
      <Container54 />
      <VerticalBorder10 />
    </div>
  );
}

function Container56() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[60px] items-end overflow-clip pl-[9px] pr-[3px] py-[7px] relative shrink-0 z-[1]"
      data-name="Container"
    >
      <Margin10 />
      <Container55 />
    </div>
  );
}

function Link10() {
  return (
    <div
      className="absolute bg-[rgba(187,187,187,0.17)] box-border content-stretch flex isolate items-start left-[610.66px] p-[2px] right-[152.67px] top-[80px]"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.35)] border-solid inset-0 pointer-events-none"
      />
      <Container52 />
      <Container56 />
    </div>
  );
}

function Sivir() {
  return (
    <div
      className="max-w-[60px] relative rounded-[4px] shrink-0 size-[60px]"
      data-name="Sivir"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgSivir}
        />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div
      className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 z-[2]"
      data-name="Container"
    >
      <Sivir />
    </div>
  );
}

function Container58() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.87)] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">Sivir</p>
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pb-[4px] pt-[3px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[31.8px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">0.44</p>
      </div>
    </div>
  );
}

function VerticalBorder11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end pl-px pr-0 py-0 relative self-stretch shrink-0 w-[31.88px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">4.54</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-[63.67px]"
      data-name="Container"
    >
      <Container59 />
      <VerticalBorder11 />
    </div>
  );
}

function Container61() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[60px] items-end overflow-clip pl-[9px] pr-[3px] py-[7px] relative shrink-0 z-[1]"
      data-name="Container"
    >
      <Margin11 />
      <Container60 />
    </div>
  );
}

function Link11() {
  return (
    <div
      className="absolute bg-[rgba(187,187,187,0.17)] box-border content-stretch flex isolate items-start left-[763.33px] p-[2px] right-0 top-[80px]"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.35)] border-solid inset-0 pointer-events-none"
      />
      <Container57 />
      <Container61 />
    </div>
  );
}

function Syndra() {
  return (
    <div
      className="max-w-[60px] relative rounded-[4px] shrink-0 size-[60px]"
      data-name="Syndra"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgSyndra}
        />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div
      className="absolute bottom-[-7px] h-[20px] left-[-1px] right-0"
      data-name="Container"
    />
  );
}

function Container63() {
  return (
    <div
      className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 z-[2]"
      data-name="Container"
    >
      <Syndra />
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.87)] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">Syndra</p>
      </div>
    </div>
  );
}

function Margin12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pb-[4px] pt-[3px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container64 />
    </div>
  );
}

function Container65() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[31.8px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">1.36</p>
      </div>
    </div>
  );
}

function VerticalBorder12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end pl-px pr-0 py-0 relative self-stretch shrink-0 w-[31.86px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">4.85</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-[63.66px]"
      data-name="Container"
    >
      <Container65 />
      <VerticalBorder12 />
    </div>
  );
}

function Container67() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[60px] items-end overflow-clip pl-[9px] pr-[3px] py-[7px] relative shrink-0 z-[1]"
      data-name="Container"
    >
      <Margin12 />
      <Container66 />
    </div>
  );
}

function Link12() {
  return (
    <div
      className="absolute bg-[rgba(187,187,187,0.17)] box-border content-stretch flex isolate items-start left-0 p-[2px] right-[763.34px] top-[160px]"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.35)] border-solid inset-0 pointer-events-none"
      />
      <Container63 />
      <Container67 />
    </div>
  );
}

function Zac() {
  return (
    <div
      className="max-w-[60px] relative rounded-[4px] shrink-0 size-[60px]"
      data-name="Zac"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgZac}
        />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div
      className="absolute bottom-[-7px] h-[20px] left-[-1px] right-0"
      data-name="Container"
    />
  );
}

function Container69() {
  return (
    <div
      className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 z-[2]"
      data-name="Container"
    >
      <Zac />
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.87)] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">Zac</p>
      </div>
    </div>
  );
}

function Margin13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pb-[4px] pt-[3px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container70 />
    </div>
  );
}

function Container71() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start mr-[-0.01px] relative self-stretch shrink-0 w-[31.8px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">0.93</p>
      </div>
    </div>
  );
}

function VerticalBorder13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end mr-[-0.01px] pl-px pr-0 py-0 relative self-stretch shrink-0 w-[31.88px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[14px] whitespace-pre">4.43</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div
      className="box-border content-stretch flex items-start pl-0 pr-[0.01px] py-0 relative shrink-0 w-[63.67px]"
      data-name="Container"
    >
      <Container71 />
      <VerticalBorder13 />
    </div>
  );
}

function Container73() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[60px] items-end overflow-clip pl-[9px] pr-[3px] py-[7px] relative shrink-0 z-[1]"
      data-name="Container"
    >
      <Margin13 />
      <Container72 />
    </div>
  );
}

function Link13() {
  return (
    <div
      className="absolute bg-[rgba(187,187,187,0.17)] box-border content-stretch flex isolate items-start left-[152.66px] p-[2px] right-[610.67px] top-[160px]"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.35)] border-solid inset-0 pointer-events-none"
      />
      <Container69 />
      <Container73 />
    </div>
  );
}

export default function Container74() {
  return (
    <div className="bg-[#99875d] relative size-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
      <Link12 />
      <Link13 />
    </div>
  );
}
