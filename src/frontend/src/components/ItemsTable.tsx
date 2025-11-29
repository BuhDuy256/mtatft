import React from "react";
import svgPaths from "../imports/svg-m38p7k7v3a";
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

interface Item {
  id: number;
  name: string;
  icon: string;
  playRate: string;
  place: string;
  top4: string;
  win: string;
  topUsers: string[];
}

interface ItemsTableProps {
  items: Item[];
}

function UpArrowIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 15"
      >
        <path d={svgPaths.p1e33b200} fill="#0095FF" />
      </svg>
    </div>
  );
}

function TrendIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <path d={svgPaths.pa479180} fill="#0095FF" />
      </svg>
    </div>
  );
}

// Map item names to their imported images
const itemImages: { [key: string]: string } = {
  "Gargoyle Ston…": imgGargoyleStoneplate,
  "Guinsoo's Rage…": imgGuinsoosRageblade,
  "Infinity Edge": imgInfinityEdge,
  "Warmog's Arm…": imgWarmogsArmor,
  "Giant Slayer": imgGiantSlayer,
  "Jeweled Gaunt…": imgJeweledGauntlet,
  "Spirit Visage": imgSpiritVisage,
  "Spear of Shojin": imgSpearOfShojin,
  "Thief's Gloves": imgThiefsGloves,
  "Protector's Vow": imgProtectorsVow,
  "Sunfire Cape": imgSunfireCape,
};

// Champion avatar images (using the imported images)
const championImages = [
  imgRammus,
  imgMalphite,
  imgRakan,
  imgZac,
  imgSett,
  imgAshe,
  imgTwistedFate,
  imgKayle,
  imgKogMaw,
  imgXayah,
  imgKaiSa,
  imgSmolder,
  imgSamira,
  imgJinx,
  imgSwain,
  imgZiggs,
  imgJanna,
  imgKarma,
  imgMalzahar,
  imgVarus,
  imgLeeSin,
  imgJayce,
  imgBraum,
  imgShen,
  imgJarvanIv,
  imgKobuko,
];

function ItemRow({ item, champions }: { item: Item; champions: string[] }) {
  const itemImage = itemImages[item.name] || imgGargoyleStoneplate;

  return (
    <div
      className="content-stretch flex h-[46px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      {/* Item Icon & Name */}
      <div
        className="box-border content-stretch flex h-full items-center pl-[14px] pr-[16px] py-0 relative shrink-0 w-[175px]"
        data-name="VerticalBorder"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
        />
        <div
          className="content-stretch flex items-center relative shrink-0"
          data-name="Container"
        >
          <div
            className="box-border content-stretch flex flex-col items-start pl-0 pr-[8px] py-0 relative shrink-0"
            data-name="Container"
          >
            <div className="max-w-[34px] relative rounded-[4px] shrink-0 size-[26px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                <img
                  alt=""
                  className="absolute left-0 max-w-none size-full top-0"
                  src={itemImage}
                />
              </div>
            </div>
          </div>
          <div
            className="box-border content-stretch flex flex-col items-start overflow-clip pl-0 pr-[7.83px] py-0 relative shrink-0"
            data-name="Container"
          >
            <div
              className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
              style={
                { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
              }
            >
              <p className="leading-[22px] whitespace-pre">{item.name}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Play Rate */}
      <div
        className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[100px]"
        data-name="VerticalBorder"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
        />
        <div
          className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-center text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" } as React.CSSProperties}
        >
          <p className="leading-[22px] whitespace-pre">{item.playRate}</p>
        </div>
      </div>

      {/* Place */}
      <div
        className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[80px]"
        data-name="VerticalBorder"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
        />
        <div
          className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-center text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" } as React.CSSProperties}
        >
          <p className="leading-[22px] whitespace-pre">{item.place}</p>
        </div>
      </div>

      {/* Top 4 */}
      <div
        className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[80px]"
        data-name="VerticalBorder"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
        />
        <div
          className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-center text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" } as React.CSSProperties}
        >
          <p className="leading-[22px] whitespace-pre">{item.top4}</p>
        </div>
      </div>

      {/* Win */}
      <div
        className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[80px]"
        data-name="VerticalBorder"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
        />
        <div
          className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-center text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" } as React.CSSProperties}
        >
          <p className="leading-[22px] whitespace-pre">{item.win}</p>
        </div>
      </div>

      {/* Top Users */}
      <div
        className="box-border content-stretch flex h-full items-center gap-[6px] pl-[16px] pr-0 py-0 relative shrink-0 flex-1"
        data-name="VerticalBorder"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
        />
        {champions.map((champion, index) => (
          <div
            key={index}
            className="max-w-[34px] relative rounded-[4px] shrink-0 size-[26px]"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
              <img
                alt=""
                className="absolute left-0 max-w-none size-full top-0"
                src={champion}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Trend Icon */}
      <div className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[60px]">
        <TrendIcon />
      </div>
    </div>
  );
}

export function ItemsTable({ items }: ItemsTableProps) {
  // Generate data with champion images
  const tableData = [
    {
      name: "Gargoyle Ston…",
      playRate: "4.22/8",
      place: "4.39",
      top4: "52.0%",
      win: "12.5%",
      champions: [imgRammus, imgMalphite, imgRakan, imgZac, imgSett],
    },
    {
      name: "Guinsoo's Rage…",
      playRate: "4.06/8",
      place: "4.34",
      top4: "48.4%",
      win: "14.4%",
      champions: [imgAshe, imgTwistedFate, imgKayle, imgKogMaw, imgXayah],
    },
    {
      name: "Infinity Edge",
      playRate: "3.92/8",
      place: "4.38",
      top4: "51.9%",
      win: "13.6%",
      champions: [imgKaiSa, imgSmolder, imgSamira, imgJinx, imgSwain],
    },
    {
      name: "Warmog's Arm…",
      playRate: "3.53/8",
      place: "4.26",
      top4: "54.5%",
      win: "14.0%",
      champions: [imgRammus, imgMalphite, imgRakan, imgZac, imgKobuko],
    },
    {
      name: "Giant Slayer",
      playRate: "3.33/8",
      place: "4.15",
      top4: "56.5%",
      win: "15.0%",
      champions: [imgKayle, imgAshe, imgSamira, imgJinx, imgSwain],
    },
    {
      name: "Jeweled Gaunt…",
      playRate: "3.14/8",
      place: "4.25",
      top4: "54.5%",
      win: "13.6%",
      champions: [imgKaiSa, imgKayle, imgRakan, imgJinx, imgKobuko],
    },
    {
      name: "Spirit Visage",
      playRate: "2.92/8",
      place: "4.24",
      top4: "54.8%",
      win: "14.5%",
      champions: [imgRammus, imgSmolder, imgMalphite, imgJinx, imgKobuko],
    },
    {
      name: "Spear of Shojin",
      playRate: "2.74/8",
      place: "4.22",
      top4: "55.3%",
      win: "13.8%",
      champions: [imgZiggs, imgSwain, imgSamira, imgJinx, imgSwain],
    },
    {
      name: "Thief's Gloves",
      playRate: "2.44/8",
      place: "4.09",
      top4: "57.5%",
      win: "16.0%",
      champions: [imgJanna, imgVarus, imgRakan, imgKarma, imgKobuko],
    },
    {
      name: "Protector's Vow",
      playRate: "2.42/8",
      place: "4.10",
      top4: "57.1%",
      win: "17.2%",
      champions: [imgLeeSin, imgJayce, imgBraum, imgShen, imgJarvanIv],
    },
    {
      name: "Sunfire Cape",
      playRate: "2.35/8",
      place: "4.26",
      top4: "54.4%",
      win: "13.6%",
      champions: [imgMalphite, imgKobuko, imgRakan, imgKarma, imgSwain],
    },
  ];

  return (
    <div className="bg-[#a89968] relative w-full" data-name="Container">
      {/* Table Header */}
      <div
        className="bg-[#7f886a] content-stretch flex h-[46px] items-start relative shrink-0 w-full"
        data-name="Container"
      >
        {/* Item Header */}
        <div
          className="box-border content-stretch flex h-full items-center pl-[16px] pr-[16px] py-0 relative shrink-0 w-[175px]"
          data-name="VerticalBorder"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
          />
          <div
            className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
            style={
              { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
            }
          >
            <p className="leading-[22px] whitespace-pre">Item</p>
          </div>
        </div>

        {/* Play rate Header */}
        <div
          className="box-border content-stretch flex h-full items-center gap-[4px] justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[100px]"
          data-name="VerticalBorder"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
          />
          <UpArrowIcon />
          <div
            className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
            style={
              { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
            }
          >
            <p className="leading-[22px] whitespace-pre">Play rate</p>
          </div>
        </div>

        {/* Place Header */}
        <div
          className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[80px]"
          data-name="VerticalBorder"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
          />
          <div
            className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
            style={
              { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
            }
          >
            <p className="leading-[22px] whitespace-pre">Place</p>
          </div>
        </div>

        {/* Top 4 Header */}
        <div
          className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[80px]"
          data-name="VerticalBorder"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
          />
          <div
            className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
            style={
              { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
            }
          >
            <p className="leading-[22px] whitespace-pre">Top 4</p>
          </div>
        </div>

        {/* Win Header */}
        <div
          className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[80px]"
          data-name="VerticalBorder"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
          />
          <div
            className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
            style={
              { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
            }
          >
            <p className="leading-[22px] whitespace-pre">Win</p>
          </div>
        </div>

        {/* Top Users Header */}
        <div
          className="box-border content-stretch flex h-full items-center pl-[16px] pr-0 py-0 relative shrink-0 flex-1"
          data-name="VerticalBorder"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
          />
          <div
            className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
            style={
              { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
            }
          >
            <p className="leading-[22px] whitespace-pre">Top Users</p>
          </div>
        </div>

        {/* Empty space for trend icon column */}
        <div className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[60px]"></div>
      </div>

      {/* Table Rows */}
      <div
        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
        data-name="Container"
      >
        {tableData.map((item, index) => (
          <ItemRow
            key={index}
            item={{
              id: index,
              name: item.name,
              icon: "",
              playRate: item.playRate,
              place: item.place,
              top4: item.top4,
              win: item.win,
              topUsers: [],
            }}
            champions={item.champions}
          />
        ))}
      </div>
    </div>
  );
}
