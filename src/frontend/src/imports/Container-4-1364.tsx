import svgPaths from "./svg-m38p7k7v3a";
import imgGargoyleStoneplate from "../assets/833b49bd6153f3889e4bc1d78aa21e06ebd7ec49.png";
import imgGuinsoosRageblade from "../assets/ed5a0a2e03372f2db1399de3fa2205836633c451.png";
import imgInfinityEdge from "../assets/383116ba6ceffea376278d43983309d21905a541.png";
import imgWarmogsArmor from "../assets/128cd153225d953a956e3718ade8449b885bd473.png";
import imgGiantSlayer from "../assets/cbaf40d0ded4ab7776a75b9c9639a09326667ed6.png";
import imgJeweledGauntlet from "../assets/5fb58f4927feb423d32eb767e4c3ccfccc1a03ee.png";
import imgSpiritVisage from "../assets/a3071973a3435f8bd6c81aed144f6de2ec7f8106.png";
import imgSpearOfShojin from "../assets/4d5f5ae9a70e851b1710c27b33a7413d47415859.png";
import imgThiefsGloves from "../assets/0aa549b167b8ed31775fe24daa56246d39898f7f.png";
import imgProtectorsVow from "../assets/44ae10f7f0903d58461d220c80cb13ffb77a0d47.png";
import imgSunfireCape from "../assets/60ad33aff7eda3ec366f316d96d626f97234e5c3.png";
import imgRammus from "../assets/424f2a8b344ffdae8339b6465fac1e3b5b91b64f.png";
import imgMalphite from "../assets/4eaedbe7ba91c31562baa7213c88c307bba06257.png";
import imgRakan from "../assets/61a6baf6934045da658223ae7f4bc0ee3ed1a5ec.png";
import imgZac from "../assets/e3713a0eea19c69c0ac2d9d5cb130bca61c7bad9.png";
import imgSett from "../assets/bde5fb79cf06eefe5cdc371171f024bc793a9077.png";
import imgAshe from "../assets/17bb3d944b75fff21885ff5ca494660dbc2919af.png";
import imgTwistedFate from "../assets/23059da785f49f1b17e0c6ab3cb900934458ddc8.png";
import imgKayle from "../assets/d18d7910b53647c16a573f58d27c3b1215e7619b.png";
import imgKogMaw from "../assets/fb8dcfc965a2b1a3d12aba8d41e1cfd4244a1f92.png";
import imgXayah from "../assets/b039ccc01962655028b1a72d26ed238fe3866bbb.png";
import imgKaiSa from "../assets/b4aa549b83827266de8c1953f7ee3959098cbd4d.png";
import imgSmolder from "../assets/0cf975ca16eb24afad55c7b0862527d409fd0b3a.png";
import imgSamira from "../assets/85a5bfb9f3545d9740a65f092fc0840309efd7f0.png";
import imgJinx from "../assets/56dfcf73f70a523bd19755c23f40e0386d8ff855.png";
import imgSwain from "../assets/41cd1df404c33295a91f2e52faeacc173f8c1007.png";
import imgZiggs from "../assets/0436c0afd58205b02548d6f82ddfefb5fc6ee17b.png";
import imgJanna from "../assets/7c555efe105c4c884fbfd1158052c7ce20e26e93.png";
import imgKarma from "../assets/3172477764c85809d0f72833fe2e68f1a8167399.png";
import imgMalzahar from "../assets/7762aae8679e987334aac279c132483a1b7e3ede.png";
import imgVarus from "../assets/0381c4ffaf39c4dd25cf51888cfa2a1421f10e87.png";
import imgLeeSin from "../assets/f1199f14fec89151f766efda53da28cb445a1a4b.png";
import imgJayce from "../assets/2335287fb08c2447f38c32a7675da380882d3ebe.png";
import imgBraum from "../assets/098d6bc9746629a18eed105d117071876d7aa378.png";
import imgShen from "../assets/60f801970f43244e1842c03397a15011a69c6783.png";
import imgJarvanIv from "../assets/09b046a0cab0ab10e71dcbd208b586d548aad429.png";
import imgKobuko from "../assets/6bbe07c4735492f8780b646d81dd2d19bc6e42b7.png";

function GargoyleStoneplate() {
  return (
    <div
      className="max-w-[34px] relative rounded-[4px] shrink-0 size-[26px]"
      data-name="Gargoyle Stoneplate"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgGargoyleStoneplate}
        />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pl-0 pr-[8px] py-0 relative shrink-0"
      data-name="Container"
    >
      <GargoyleStoneplate />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start overflow-clip pl-0 pr-[7.83px] py-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[22px] whitespace-pre">Gargoyle Ston…</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="Container"
    >
      <Container />
      <Container1 />
    </div>
  );
}

function VerticalBorder() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center pl-[14px] pr-[16px] py-0 relative shrink-0 w-[175px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="content-stretch flex h-[46px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <VerticalBorder />
    </div>
  );
}

function GuinsoosRageblade() {
  return (
    <div
      className="max-w-[34px] relative rounded-[4px] shrink-0 size-[26px]"
      data-name="Guinsoo\'s Rageblade"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgGuinsoosRageblade}
        />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pl-0 pr-[8px] py-0 relative shrink-0"
      data-name="Container"
    >
      <GuinsoosRageblade />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start overflow-clip pl-0 pr-[0.59px] py-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[22px] whitespace-pre">{`Guinsoo's Rage…`}</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="Container"
    >
      <Container4 />
      <Container5 />
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center pl-[14px] pr-[16px] py-0 relative shrink-0 w-[175px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="content-stretch flex h-[46px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <VerticalBorder1 />
    </div>
  );
}

function InfinityEdge() {
  return (
    <div
      className="max-w-[34px] relative rounded-[4px] shrink-0 size-[26px]"
      data-name="Infinity Edge"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgInfinityEdge}
        />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pl-0 pr-[8px] py-0 relative shrink-0"
      data-name="Container"
    >
      <InfinityEdge />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[22px] whitespace-pre">Infinity Edge</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="Container"
    >
      <Container8 />
      <Container9 />
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center pl-[14px] pr-[16px] py-0 relative shrink-0 w-[175px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="content-stretch flex h-[46px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <VerticalBorder2 />
    </div>
  );
}

function WarmogsArmor() {
  return (
    <div
      className="max-w-[34px] relative rounded-[4px] shrink-0 size-[26px]"
      data-name="Warmog\'s Armor"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgWarmogsArmor}
        />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pl-0 pr-[8px] py-0 relative shrink-0"
      data-name="Container"
    >
      <WarmogsArmor />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start overflow-clip pl-0 pr-[2.98px] py-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[22px] whitespace-pre">{`Warmog's Arm…`}</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="Container"
    >
      <Container12 />
      <Container13 />
    </div>
  );
}

function VerticalBorder3() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center pl-[14px] pr-[16px] py-0 relative shrink-0 w-[175px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div
      className="content-stretch flex h-[46px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <VerticalBorder3 />
    </div>
  );
}

function GiantSlayer() {
  return (
    <div
      className="max-w-[34px] relative rounded-[4px] shrink-0 size-[26px]"
      data-name="Giant Slayer"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgGiantSlayer}
        />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pl-0 pr-[8px] py-0 relative shrink-0"
      data-name="Container"
    >
      <GiantSlayer />
    </div>
  );
}

function Container17() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[22px] whitespace-pre">Giant Slayer</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="Container"
    >
      <Container16 />
      <Container17 />
    </div>
  );
}

function VerticalBorder4() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center pl-[14px] pr-[16px] py-0 relative shrink-0 w-[175px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div
      className="content-stretch flex h-[46px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <VerticalBorder4 />
    </div>
  );
}

function JeweledGauntlet() {
  return (
    <div
      className="max-w-[34px] relative rounded-[4px] shrink-0 size-[26px]"
      data-name="Jeweled Gauntlet"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgJeweledGauntlet}
        />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pl-0 pr-[8px] py-0 relative shrink-0"
      data-name="Container"
    >
      <JeweledGauntlet />
    </div>
  );
}

function Container21() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start overflow-clip pl-0 pr-[1.88px] py-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[22px] whitespace-pre">Jeweled Gaunt…</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="Container"
    >
      <Container20 />
      <Container21 />
    </div>
  );
}

function VerticalBorder5() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center pl-[14px] pr-[16px] py-0 relative shrink-0 w-[175px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div
      className="content-stretch flex h-[46px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <VerticalBorder5 />
    </div>
  );
}

function SpiritVisage() {
  return (
    <div
      className="max-w-[34px] relative rounded-[4px] shrink-0 size-[26px]"
      data-name="Spirit Visage"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgSpiritVisage}
        />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pl-0 pr-[8px] py-0 relative shrink-0"
      data-name="Container"
    >
      <SpiritVisage />
    </div>
  );
}

function Container25() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[22px] whitespace-pre">Spirit Visage</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="Container"
    >
      <Container24 />
      <Container25 />
    </div>
  );
}

function VerticalBorder6() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center pl-[14px] pr-[16px] py-0 relative shrink-0 w-[175px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div
      className="content-stretch flex h-[46px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <VerticalBorder6 />
    </div>
  );
}

function SpearOfShojin() {
  return (
    <div
      className="max-w-[34px] relative rounded-[4px] shrink-0 size-[26px]"
      data-name="Spear of Shojin"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgSpearOfShojin}
        />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pl-0 pr-[8px] py-0 relative shrink-0"
      data-name="Container"
    >
      <SpearOfShojin />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[22px] whitespace-pre">Spear of Shojin</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="Container"
    >
      <Container28 />
      <Container29 />
    </div>
  );
}

function VerticalBorder7() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center pl-[14px] pr-[16px] py-0 relative shrink-0 w-[175px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="content-stretch flex h-[46px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <VerticalBorder7 />
    </div>
  );
}

function ThiefsGloves() {
  return (
    <div
      className="max-w-[34px] relative rounded-[4px] shrink-0 size-[26px]"
      data-name="Thief\'s Gloves"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgThiefsGloves}
        />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pl-0 pr-[8px] py-0 relative shrink-0"
      data-name="Container"
    >
      <ThiefsGloves />
    </div>
  );
}

function Container33() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[22px] whitespace-pre">{`Thief's Gloves`}</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="Container"
    >
      <Container32 />
      <Container33 />
    </div>
  );
}

function VerticalBorder8() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center pl-[14px] pr-[16px] py-0 relative shrink-0 w-[175px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div
      className="content-stretch flex h-[46px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <VerticalBorder8 />
    </div>
  );
}

function ProtectorsVow() {
  return (
    <div
      className="max-w-[34px] relative rounded-[4px] shrink-0 size-[26px]"
      data-name="Protector\'s Vow"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgProtectorsVow}
        />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pl-0 pr-[8px] py-0 relative shrink-0"
      data-name="Container"
    >
      <ProtectorsVow />
    </div>
  );
}

function Container37() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[22px] whitespace-pre">{`Protector's Vow`}</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="Container"
    >
      <Container36 />
      <Container37 />
    </div>
  );
}

function VerticalBorder9() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center pl-[14px] pr-[16px] py-0 relative shrink-0 w-[175px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div
      className="content-stretch flex h-[46px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <VerticalBorder9 />
    </div>
  );
}

function SunfireCape() {
  return (
    <div
      className="max-w-[34px] relative rounded-[4px] shrink-0 size-[26px]"
      data-name="Sunfire Cape"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgSunfireCape}
        />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pl-0 pr-[8px] py-0 relative shrink-0"
      data-name="Container"
    >
      <SunfireCape />
    </div>
  );
}

function Container41() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[22px] whitespace-pre">Sunfire Cape</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="Container"
    >
      <Container40 />
      <Container41 />
    </div>
  );
}

function VerticalBorder10() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center pl-[14px] pr-[16px] py-0 relative shrink-0 w-[175px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div
      className="content-stretch flex h-[46px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <VerticalBorder10 />
    </div>
  );
}

function Background() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[681px] items-start max-w-[179px] min-w-[179px] pl-[4px] pr-0 py-0 shrink-0 sticky top-0 z-[2]"
      data-name="Background"
    >
      <Container3 />
      <Container7 />
      <Container11 />
      <Container15 />
      <Container19 />
      <Container23 />
      <Container27 />
      <Container31 />
      <Container35 />
      <Container39 />
      <Container43 />
    </div>
  );
}

function Component25MGames() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="2.5M games"
    >
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">4.22/8</p>
      </div>
    </div>
  );
}

function VerticalBorder11() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[97px] pl-[14px] pr-[16px] py-0 relative shrink-0 w-[100.52px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Component25MGames />
    </div>
  );
}

function VerticalBorder12() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[70px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[72.53px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">4.39</p>
      </div>
    </div>
  );
}

function VerticalBorder13() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[72px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[74.61px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">52.0%</p>
      </div>
    </div>
  );
}

function VerticalBorder14() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[74px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[76.67px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">12.5%</p>
      </div>
    </div>
  );
}

function Rammus() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Rammus"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgRammus}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Malphite() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Malphite"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgMalphite}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Rakan() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Rakan"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgRakan}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(20,204,115,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Zac() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Zac"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgZac}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Sett() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Sett"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgSett}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(222,14,189,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Container44() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="Container"
    >
      <Rammus />
      <Malphite />
      <Rakan />
      <Zac />
      <Sett />
    </div>
  );
}

function Container45() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center min-w-[194px] px-[14px] py-0 relative shrink-0 w-[201.03px]"
      data-name="Container"
    >
      <Container44 />
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Component 1">
          <path d={svgPaths.pa479180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-center p-[6px] relative rounded-[16px] shrink-0"
      data-name="Component 3"
    >
      <Component />
    </div>
  );
}

function Container46() {
  return (
    <div
      className="content-stretch flex h-full items-center min-w-[38px] relative shrink-0 w-[39.38px]"
      data-name="Container"
    >
      <Component2 />
    </div>
  );
}

function Container47() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[46px] items-start left-0 min-w-[545px] pl-0 pr-[4px] py-0 right-0 top-0"
      data-name="Container"
    >
      <VerticalBorder11 />
      <VerticalBorder12 />
      <VerticalBorder13 />
      <VerticalBorder14 />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Component24MGames() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="2.4M games"
    >
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">4.06/8</p>
      </div>
    </div>
  );
}

function VerticalBorder15() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[97px] pl-[14px] pr-[16px] py-0 relative shrink-0 w-[100.52px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Component24MGames />
    </div>
  );
}

function VerticalBorder16() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[70px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[72.53px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">4.54</p>
      </div>
    </div>
  );
}

function VerticalBorder17() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[72px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[74.61px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">48.4%</p>
      </div>
    </div>
  );
}

function VerticalBorder18() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[74px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[76.67px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">14.4%</p>
      </div>
    </div>
  );
}

function Ashe() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Ashe"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgAshe}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(222,14,189,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function TwistedFate() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Twisted Fate"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgTwistedFate}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(255,196,48,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Kayle() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Kayle"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgKayle}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function KogMaw() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Kog\'Maw"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgKogMaw}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Xayah() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Xayah"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgXayah}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(20,204,115,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Container48() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="Container"
    >
      <Ashe />
      <TwistedFate />
      <Kayle />
      <KogMaw />
      <Xayah />
    </div>
  );
}

function Container49() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center min-w-[194px] px-[14px] py-0 relative shrink-0 w-[201.03px]"
      data-name="Container"
    >
      <Container48 />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Component 1">
          <path d={svgPaths.pa479180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-center p-[6px] relative rounded-[16px] shrink-0"
      data-name="Component 3"
    >
      <Component1 />
    </div>
  );
}

function Container50() {
  return (
    <div
      className="content-stretch flex h-full items-center min-w-[38px] relative shrink-0 w-[39.37px]"
      data-name="Container"
    >
      <Component3 />
    </div>
  );
}

function Container51() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[46px] items-start left-0 min-w-[545px] pl-0 pr-[4px] py-0 right-0 top-[46px]"
      data-name="Container"
    >
      <VerticalBorder15 />
      <VerticalBorder16 />
      <VerticalBorder17 />
      <VerticalBorder18 />
      <Container49 />
      <Container50 />
    </div>
  );
}

function Component24MGames1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="2.4M games"
    >
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">3.92/8</p>
      </div>
    </div>
  );
}

function VerticalBorder19() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[97px] pl-[14px] pr-[16px] py-0 relative shrink-0 w-[100.52px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Component24MGames1 />
    </div>
  );
}

function VerticalBorder20() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[70px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[72.53px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">4.38</p>
      </div>
    </div>
  );
}

function VerticalBorder21() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[72px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[74.61px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">51.9%</p>
      </div>
    </div>
  );
}

function VerticalBorder22() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[74px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[76.67px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">13.6%</p>
      </div>
    </div>
  );
}

function KaiSa() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Kai\'Sa"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgKaiSa}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(20,204,115,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Smolder() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Smolder"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgSmolder}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Ashe1() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Ashe"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgAshe}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(222,14,189,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Samira() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Samira"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgSamira}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(222,14,189,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Jinx() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Jinx"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgJinx}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(222,14,189,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Container52() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="Container"
    >
      <KaiSa />
      <Smolder />
      <Ashe1 />
      <Samira />
      <Jinx />
    </div>
  );
}

function Container53() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center min-w-[194px] px-[14px] py-0 relative shrink-0 w-[201.03px]"
      data-name="Container"
    >
      <Container52 />
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Component 1">
          <path d={svgPaths.pa479180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component5() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-center p-[6px] relative rounded-[16px] shrink-0"
      data-name="Component 3"
    >
      <Component4 />
    </div>
  );
}

function Container54() {
  return (
    <div
      className="content-stretch flex h-full items-center min-w-[38px] relative shrink-0 w-[39.37px]"
      data-name="Container"
    >
      <Component5 />
    </div>
  );
}

function Container55() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[46px] items-start left-0 min-w-[545px] pl-0 pr-[4px] py-0 right-0 top-[92px]"
      data-name="Container"
    >
      <VerticalBorder19 />
      <VerticalBorder20 />
      <VerticalBorder21 />
      <VerticalBorder22 />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Component21MGames() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="2.1M games"
    >
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">3.53/8</p>
      </div>
    </div>
  );
}

function VerticalBorder23() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[97px] pl-[14px] pr-[16px] py-0 relative shrink-0 w-[100.52px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Component21MGames />
    </div>
  );
}

function VerticalBorder24() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[70px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[72.53px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">4.26</p>
      </div>
    </div>
  );
}

function VerticalBorder25() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[72px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[74.61px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">54.5%</p>
      </div>
    </div>
  );
}

function VerticalBorder26() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[74px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[76.67px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">14.0%</p>
      </div>
    </div>
  );
}

function Rammus1() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Rammus"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgRammus}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Malphite1() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Malphite"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgMalphite}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Rakan1() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Rakan"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgRakan}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(20,204,115,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Sett1() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Sett"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgSett}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(222,14,189,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Swain() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Swain"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgSwain}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Container56() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="Container"
    >
      <Rammus1 />
      <Malphite1 />
      <Rakan1 />
      <Sett1 />
      <Swain />
    </div>
  );
}

function Container57() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center min-w-[194px] px-[14px] py-0 relative shrink-0 w-[201.03px]"
      data-name="Container"
    >
      <Container56 />
    </div>
  );
}

function Component6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Component 1">
          <path d={svgPaths.pa479180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component7() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-center p-[6px] relative rounded-[16px] shrink-0"
      data-name="Component 3"
    >
      <Component6 />
    </div>
  );
}

function Container58() {
  return (
    <div
      className="content-stretch flex h-full items-center min-w-[38px] relative shrink-0 w-[39.37px]"
      data-name="Container"
    >
      <Component7 />
    </div>
  );
}

function Container59() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[46px] items-start left-0 min-w-[545px] pl-0 pr-[4px] py-0 right-0 top-[138px]"
      data-name="Container"
    >
      <VerticalBorder23 />
      <VerticalBorder24 />
      <VerticalBorder25 />
      <VerticalBorder26 />
      <Container57 />
      <Container58 />
    </div>
  );
}

function Component20MGames() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="2.0M games"
    >
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">3.33/8</p>
      </div>
    </div>
  );
}

function VerticalBorder27() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[97px] pl-[14px] pr-[16px] py-0 relative shrink-0 w-[100.52px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Component20MGames />
    </div>
  );
}

function VerticalBorder28() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[70px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[72.53px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">4.15</p>
      </div>
    </div>
  );
}

function VerticalBorder29() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[72px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[74.61px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">56.5%</p>
      </div>
    </div>
  );
}

function VerticalBorder30() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[74px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[76.67px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">15.0%</p>
      </div>
    </div>
  );
}

function Kayle1() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Kayle"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgKayle}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Ashe2() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Ashe"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgAshe}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(222,14,189,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function TwistedFate1() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Twisted Fate"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgTwistedFate}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(255,196,48,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Jinx1() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Jinx"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgJinx}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(222,14,189,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Ziggs() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Ziggs"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgZiggs}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Container60() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="Container"
    >
      <Kayle1 />
      <Ashe2 />
      <TwistedFate1 />
      <Jinx1 />
      <Ziggs />
    </div>
  );
}

function Container61() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center min-w-[194px] px-[14px] py-0 relative shrink-0 w-[201.03px]"
      data-name="Container"
    >
      <Container60 />
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Component 1">
          <path d={svgPaths.pa479180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component9() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-center p-[6px] relative rounded-[16px] shrink-0"
      data-name="Component 3"
    >
      <Component8 />
    </div>
  );
}

function Container62() {
  return (
    <div
      className="content-stretch flex h-full items-center min-w-[38px] relative shrink-0 w-[39.37px]"
      data-name="Container"
    >
      <Component9 />
    </div>
  );
}

function Container63() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[46px] items-start left-0 min-w-[545px] pl-0 pr-[4px] py-0 right-0 top-[184px]"
      data-name="Container"
    >
      <VerticalBorder27 />
      <VerticalBorder28 />
      <VerticalBorder29 />
      <VerticalBorder30 />
      <Container61 />
      <Container62 />
    </div>
  );
}

function Component19MGames() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="1.9M games"
    >
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">3.14/8</p>
      </div>
    </div>
  );
}

function VerticalBorder31() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[97px] pl-[14px] pr-[16px] py-0 relative shrink-0 w-[100.52px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Component19MGames />
    </div>
  );
}

function VerticalBorder32() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[70px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[72.53px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">4.25</p>
      </div>
    </div>
  );
}

function VerticalBorder33() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[72px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[74.61px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">54.5%</p>
      </div>
    </div>
  );
}

function VerticalBorder34() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[74px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[76.67px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">13.6%</p>
      </div>
    </div>
  );
}

function Janna() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Janna"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgJanna}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(20,204,115,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Kayle2() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Kayle"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgKayle}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Karma() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Karma"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgKarma}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(222,14,189,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Ziggs1() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Ziggs"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgZiggs}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Malzahar() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Malzahar"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgMalzahar}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Container64() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="Container"
    >
      <Janna />
      <Kayle2 />
      <Karma />
      <Ziggs1 />
      <Malzahar />
    </div>
  );
}

function Container65() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center min-w-[194px] px-[14px] py-0 relative shrink-0 w-[201.03px]"
      data-name="Container"
    >
      <Container64 />
    </div>
  );
}

function Component10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Component 1">
          <path d={svgPaths.pa479180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component11() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-center p-[6px] relative rounded-[16px] shrink-0"
      data-name="Component 3"
    >
      <Component10 />
    </div>
  );
}

function Container66() {
  return (
    <div
      className="content-stretch flex h-full items-center min-w-[38px] relative shrink-0 w-[39.37px]"
      data-name="Container"
    >
      <Component11 />
    </div>
  );
}

function Container67() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[46px] items-start left-0 min-w-[545px] pl-0 pr-[4px] py-0 right-0 top-[230px]"
      data-name="Container"
    >
      <VerticalBorder31 />
      <VerticalBorder32 />
      <VerticalBorder33 />
      <VerticalBorder34 />
      <Container65 />
      <Container66 />
    </div>
  );
}

function Component18MGames() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="1.8M games"
    >
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">2.92/8</p>
      </div>
    </div>
  );
}

function VerticalBorder35() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[97px] pl-[14px] pr-[16px] py-0 relative shrink-0 w-[100.52px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Component18MGames />
    </div>
  );
}

function VerticalBorder36() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[70px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[72.53px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">4.24</p>
      </div>
    </div>
  );
}

function VerticalBorder37() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[72px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[74.61px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">54.8%</p>
      </div>
    </div>
  );
}

function VerticalBorder38() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[74px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[76.67px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">14.5%</p>
      </div>
    </div>
  );
}

function Rammus2() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Rammus"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgRammus}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Rakan2() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Rakan"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgRakan}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(20,204,115,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Malphite2() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Malphite"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgMalphite}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Zac1() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Zac"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgZac}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Sett2() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Sett"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgSett}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(222,14,189,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Container68() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="Container"
    >
      <Rammus2 />
      <Rakan2 />
      <Malphite2 />
      <Zac1 />
      <Sett2 />
    </div>
  );
}

function Container69() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center min-w-[194px] px-[14px] py-0 relative shrink-0 w-[201.03px]"
      data-name="Container"
    >
      <Container68 />
    </div>
  );
}

function Component12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Component 1">
          <path d={svgPaths.pa479180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component13() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-center p-[6px] relative rounded-[16px] shrink-0"
      data-name="Component 3"
    >
      <Component12 />
    </div>
  );
}

function Container70() {
  return (
    <div
      className="content-stretch flex h-full items-center min-w-[38px] relative shrink-0 w-[39.37px]"
      data-name="Container"
    >
      <Component13 />
    </div>
  );
}

function Container71() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[46px] items-start left-0 min-w-[545px] pl-0 pr-[4px] py-0 right-0 top-[276px]"
      data-name="Container"
    >
      <VerticalBorder35 />
      <VerticalBorder36 />
      <VerticalBorder37 />
      <VerticalBorder38 />
      <Container69 />
      <Container70 />
    </div>
  );
}

function Component16MGames() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="1.6M games"
    >
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">2.74/8</p>
      </div>
    </div>
  );
}

function VerticalBorder39() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[97px] pl-[14px] pr-[16px] py-0 relative shrink-0 w-[100.52px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Component16MGames />
    </div>
  );
}

function VerticalBorder40() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[70px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[72.53px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">4.22</p>
      </div>
    </div>
  );
}

function VerticalBorder41() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[72px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[74.61px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">55.3%</p>
      </div>
    </div>
  );
}

function VerticalBorder42() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[74px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[76.67px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">13.8%</p>
      </div>
    </div>
  );
}

function KogMaw1() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Kog\'Maw"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgKogMaw}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Jinx2() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Jinx"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgJinx}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(222,14,189,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Samira1() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Samira"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgSamira}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(222,14,189,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Varus() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Varus"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgVarus}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(255,196,48,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Karma1() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Karma"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgKarma}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(222,14,189,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Container72() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="Container"
    >
      <KogMaw1 />
      <Jinx2 />
      <Samira1 />
      <Varus />
      <Karma1 />
    </div>
  );
}

function Container73() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center min-w-[194px] px-[14px] py-0 relative shrink-0 w-[201.03px]"
      data-name="Container"
    >
      <Container72 />
    </div>
  );
}

function Component14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Component 1">
          <path d={svgPaths.pa479180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component15() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-center p-[6px] relative rounded-[16px] shrink-0"
      data-name="Component 3"
    >
      <Component14 />
    </div>
  );
}

function Container74() {
  return (
    <div
      className="content-stretch flex h-full items-center min-w-[38px] relative shrink-0 w-[39.37px]"
      data-name="Container"
    >
      <Component15 />
    </div>
  );
}

function Container75() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[46px] items-start left-0 min-w-[545px] pl-0 pr-[4px] py-0 right-0 top-[322px]"
      data-name="Container"
    >
      <VerticalBorder39 />
      <VerticalBorder40 />
      <VerticalBorder41 />
      <VerticalBorder42 />
      <Container73 />
      <Container74 />
    </div>
  );
}

function Component15MGames() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="1.5M games"
    >
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">2.44/8</p>
      </div>
    </div>
  );
}

function VerticalBorder43() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[97px] pl-[14px] pr-[16px] py-0 relative shrink-0 w-[100.52px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Component15MGames />
    </div>
  );
}

function VerticalBorder44() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[70px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[72.53px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">4.09</p>
      </div>
    </div>
  );
}

function VerticalBorder45() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[72px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[74.61px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">57.5%</p>
      </div>
    </div>
  );
}

function VerticalBorder46() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[74px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[76.67px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">16.0%</p>
      </div>
    </div>
  );
}

function LeeSin() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Lee Sin"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgLeeSin}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(255,196,48,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Jayce() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Jayce"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgJayce}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Braum() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Braum"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgBraum}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(255,196,48,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Shen() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Shen"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgShen}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(20,204,115,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Swain1() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Swain"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgSwain}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Container76() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="Container"
    >
      <LeeSin />
      <Jayce />
      <Braum />
      <Shen />
      <Swain1 />
    </div>
  );
}

function Container77() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center min-w-[194px] px-[14px] py-0 relative shrink-0 w-[201.03px]"
      data-name="Container"
    >
      <Container76 />
    </div>
  );
}

function Component16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Component 1">
          <path d={svgPaths.pa479180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component17() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-center p-[6px] relative rounded-[16px] shrink-0"
      data-name="Component 3"
    >
      <Component16 />
    </div>
  );
}

function Container78() {
  return (
    <div
      className="content-stretch flex h-full items-center min-w-[38px] relative shrink-0 w-[39.37px]"
      data-name="Container"
    >
      <Component17 />
    </div>
  );
}

function Container79() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[46px] items-start left-0 min-w-[545px] pl-0 pr-[4px] py-0 right-0 top-[368px]"
      data-name="Container"
    >
      <VerticalBorder43 />
      <VerticalBorder44 />
      <VerticalBorder45 />
      <VerticalBorder46 />
      <Container77 />
      <Container78 />
    </div>
  );
}

function Component15MGames1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="1.5M games"
    >
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">2.42/8</p>
      </div>
    </div>
  );
}

function VerticalBorder47() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[97px] pl-[14px] pr-[16px] py-0 relative shrink-0 w-[100.52px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Component15MGames1 />
    </div>
  );
}

function VerticalBorder48() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[70px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[72.53px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">4.10</p>
      </div>
    </div>
  );
}

function VerticalBorder49() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[72px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[74.61px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">57.1%</p>
      </div>
    </div>
  );
}

function VerticalBorder50() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[74px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[76.67px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">17.2%</p>
      </div>
    </div>
  );
}

function Rammus3() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Rammus"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgRammus}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Rakan3() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Rakan"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgRakan}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(20,204,115,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function JarvanIv() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Jarvan IV"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgJarvanIv}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(222,14,189,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Kobuko() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Kobuko"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgKobuko}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(20,204,115,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Braum1() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Braum"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgBraum}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(255,196,48,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Container80() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="Container"
    >
      <Rammus3 />
      <Rakan3 />
      <JarvanIv />
      <Kobuko />
      <Braum1 />
    </div>
  );
}

function Container81() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center min-w-[194px] px-[14px] py-0 relative shrink-0 w-[201.03px]"
      data-name="Container"
    >
      <Container80 />
    </div>
  );
}

function Component18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Component 1">
          <path d={svgPaths.pa479180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component19() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-center p-[6px] relative rounded-[16px] shrink-0"
      data-name="Component 3"
    >
      <Component18 />
    </div>
  );
}

function Container82() {
  return (
    <div
      className="content-stretch flex h-full items-center min-w-[38px] relative shrink-0 w-[39.37px]"
      data-name="Container"
    >
      <Component19 />
    </div>
  );
}

function Container83() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[46px] items-start left-0 min-w-[545px] pl-0 pr-[4px] py-0 right-0 top-[414px]"
      data-name="Container"
    >
      <VerticalBorder47 />
      <VerticalBorder48 />
      <VerticalBorder49 />
      <VerticalBorder50 />
      <Container81 />
      <Container82 />
    </div>
  );
}

function Component14MGames() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="1.4M games"
    >
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">2.35/8</p>
      </div>
    </div>
  );
}

function VerticalBorder51() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[97px] pl-[14px] pr-[16px] py-0 relative shrink-0 w-[100.52px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Component14MGames />
    </div>
  );
}

function VerticalBorder52() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[70px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[72.53px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">4.26</p>
      </div>
    </div>
  );
}

function VerticalBorder53() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[72px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[74.61px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">54.4%</p>
      </div>
    </div>
  );
}

function VerticalBorder54() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[74px] pb-[12.5px] pl-[14px] pr-[16px] pt-[11.5px] relative shrink-0 w-[76.67px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">13.6%</p>
      </div>
    </div>
  );
}

function Malphite3() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Malphite"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgMalphite}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Swain2() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Swain"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgSwain}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(84,195,255,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Rakan4() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Rakan"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgRakan}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(20,204,115,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Shen1() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Shen"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgShen}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(20,204,115,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function JarvanIv1() {
  return (
    <div
      className="aspect-[30/30] max-w-[166px] pointer-events-none relative rounded-[4px] self-stretch shrink-0"
      data-name="Jarvan IV"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[4px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgJarvanIv}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(222,14,189,0.88)] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}

function Container84() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="Container"
    >
      <Malphite3 />
      <Swain2 />
      <Rakan4 />
      <Shen1 />
      <JarvanIv1 />
    </div>
  );
}

function Container85() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center min-w-[194px] px-[14px] py-0 relative shrink-0 w-[201.03px]"
      data-name="Container"
    >
      <Container84 />
    </div>
  );
}

function Component20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Component 1">
          <path d={svgPaths.pa479180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component21() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-center p-[6px] relative rounded-[16px] shrink-0"
      data-name="Component 3"
    >
      <Component20 />
    </div>
  );
}

function Container86() {
  return (
    <div
      className="content-stretch flex h-full items-center min-w-[38px] relative shrink-0 w-[39.37px]"
      data-name="Container"
    >
      <Component21 />
    </div>
  );
}

function Container87() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[46px] items-start left-0 min-w-[545px] pl-0 pr-[4px] py-0 right-0 top-[460px]"
      data-name="Container"
    >
      <VerticalBorder51 />
      <VerticalBorder52 />
      <VerticalBorder53 />
      <VerticalBorder54 />
      <Container85 />
      <Container86 />
    </div>
  );
}

function Background1() {
  return (
    <div
      className="h-[681px] max-w-[1261px] overflow-auto relative shrink-0 w-[569px] z-[1]"
      data-name="Background"
    >
      <Container47 />
      <Container51 />
      <Container55 />
      <Container59 />
      <Container63 />
      <Container67 />
      <Container71 />
      <Container75 />
      <Container79 />
      <Container83 />
      <Container87 />
    </div>
  );
}

function Container88() {
  return (
    <div
      className="absolute content-stretch flex isolate items-start left-1/2 top-[41px] translate-x-[-50%]"
      data-name="Container"
    >
      <Background />
      <Background1 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div
      className="bg-[#eaf6ff] h-[30px] max-w-[1440px] shadow-[0px_3px_5px_-1px_rgba(0,0,0,0.2),0px_6px_10px_0px_rgba(0,0,0,0.14),0px_1px_18px_0px_rgba(0,0,0,0.12)] shrink-0 sticky top-0 w-full"
      data-name="Background+Shadow"
    />
  );
}

function Margin() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[37px] items-start max-w-[1440px] pb-0 pointer-events-auto pt-[7px] px-0 sticky top-0"
      data-name="Margin"
    >
      <BackgroundShadow />
    </div>
  );
}

function Container89() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[22px] whitespace-pre">Item</p>
      </div>
    </div>
  );
}

function VerticalBorder55() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center pl-[14px] pr-[16px] py-0 relative shrink-0 w-[175px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Container89 />
    </div>
  );
}

function Component22() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p1e33b200}
            fill="var(--fill-0, #52A9FF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container90() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pb-[0.75px] pl-0 pr-px pt-[3.25px] relative shrink-0"
      data-name="Container"
    >
      <Component22 />
    </div>
  );
}

function Container91() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[22px] whitespace-pre">Play rate</p>
      </div>
    </div>
  );
}

function VerticalBorder56() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[97px] pl-0 pr-[16px] py-0 relative shrink-0 w-[100.52px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Container90 />
      <Container91 />
    </div>
  );
}

function Container92() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[22px] whitespace-pre">Place</p>
      </div>
    </div>
  );
}

function VerticalBorder57() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[70px] pl-[14px] pr-[16px] py-0 relative shrink-0 w-[72.53px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Container92 />
    </div>
  );
}

function Container93() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[22px] whitespace-pre">Top 4</p>
      </div>
    </div>
  );
}

function VerticalBorder58() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[72px] pl-[14px] pr-[16px] py-0 relative shrink-0 w-[74.61px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Container93 />
    </div>
  );
}

function Container94() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[22px] whitespace-pre">Win</p>
      </div>
    </div>
  );
}

function VerticalBorder59() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center justify-end min-w-[74px] pl-[14px] pr-[16px] py-0 relative shrink-0 w-[76.67px]"
      data-name="VerticalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      <Container94 />
    </div>
  );
}

function Container95() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[22px] whitespace-pre">Top Users</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div
      className="box-border content-stretch flex h-full items-center min-w-[194px] px-[14px] py-0 relative shrink-0 w-[201.03px]"
      data-name="Container"
    >
      <Container95 />
    </div>
  );
}

function Container97() {
  return (
    <div
      className="h-full min-w-[38px] shrink-0 w-[39.38px]"
      data-name="Container"
    />
  );
}

function Container98() {
  return (
    <div
      className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[564.77px]"
      data-name="Container"
    >
      <VerticalBorder56 />
      <VerticalBorder57 />
      <VerticalBorder58 />
      <VerticalBorder59 />
      <Container96 />
      <Container97 />
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center px-[4px] py-0 relative w-full">
          <VerticalBorder55 />
          <Container98 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start max-w-[1440px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 sticky top-0 w-full"
      data-name="Background"
    >
      <Container99 />
    </div>
  );
}

function Margin1() {
  return (
    <div
      className="bg-[#7f886a] content-stretch flex flex-col items-start max-w-[1440px] pointer-events-auto sticky top-0"
      data-name="Margin"
    >
      <Background2 />
    </div>
  );
}

export default function Container100() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container88 />
      <div className="absolute bottom-0 h-[calc(100%+7px)] left-0 pointer-events-none right-[0.23px] top-[-7px]">
        <Margin />
      </div>
      <div className="absolute bottom-0 h-[calc(100%+7px)] left-0 pointer-events-none right-[0.23px] top-[-7px]">
        <Margin1 />
      </div>
    </div>
  );
}
