import React from 'react';
import svgPaths from '../imports/svg-cqc21zuxw9';

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.p15861e40} fill="white" />
      </svg>
    </div>
  );
}

function CheckboxIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.p12c0c180} fill="white" fillOpacity="0.7" />
      </svg>
    </div>
  );
}

function SearchInput() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
        <div className="box-border content-stretch flex flex-col items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="Container">
          <div className="content-stretch flex h-[0.16px] items-center max-h-[32px] relative shrink-0" data-name="Container">
            <SearchIcon />
          </div>
        </div>
        <div className="box-border content-stretch flex flex-col h-[32px] items-start min-w-[183px] overflow-clip pb-[7px] pt-[6px] px-0 relative shrink-0" data-name="Input">
          <div className="content-stretch flex flex-col items-start opacity-50 overflow-clip relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" } as React.CSSProperties}>
              <p className="leading-[normal] whitespace-pre">Search</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 h-[24px] left-0 right-0" data-name="HorizontalBorder">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.7)] border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function CheckboxLabel({ label }: { label: string }) {
  return (
    <div className="box-border content-stretch flex flex-col items-start mr-[-11px] pl-0 pr-[16px] py-0 relative shrink-0" data-name="Label:margin">
      <div className="content-stretch flex isolate items-center relative shrink-0" data-name="Label">
        <div className="box-border content-stretch flex items-center justify-center p-[9px] relative rounded-[21px] shrink-0 z-[2]" data-name="Component 2">
          <CheckboxIcon />
          <div className="absolute bg-white inset-0 opacity-0 rounded-[2.5px]" data-name="Input">
            <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2.5px]" />
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Container">
          <div className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[16px] text-nowrap tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" } as React.CSSProperties}>
            <p className="leading-[24px] whitespace-pre">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ItemsFilter() {
  return (
    <div className="bg-[#7f886a] relative w-full" data-name="Container">
      <div className="w-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-[4px] pl-[16px] pr-0 pt-0 relative w-full">
          <SearchInput />
          <div className="box-border content-center flex flex-wrap gap-0 items-center pl-0 pr-[11px] py-0 relative shrink-0 w-full" data-name="Container">
            <div className="box-border content-stretch flex flex-col items-start mr-[-11px] pl-0 pr-[12px] py-0 relative shrink-0" data-name="Container">
              <div className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" } as React.CSSProperties}>
                <p className="leading-[16px] whitespace-pre">Items Shown:</p>
              </div>
            </div>
            <CheckboxLabel label="Craftable" />
            <CheckboxLabel label="Artifacts" />
            <CheckboxLabel label="Emblem" />
            <CheckboxLabel label="Radiant" />
            <CheckboxLabel label="Support" />
            <CheckboxLabel label="Other" />
          </div>
        </div>
      </div>
    </div>
  );
}
