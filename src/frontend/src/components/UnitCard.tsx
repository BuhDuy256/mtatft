import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Unit {
  id: string | number;
  name: string;
  avgPlace: number;
  playRate: number;
  imageUrl?: string;
}

interface UnitCardProps {
  unit: Unit;
}

export function UnitCard({ unit }: UnitCardProps) {
  return (
    <div
      className="bg-[rgba(187,187,187,0.17)] box-border content-stretch flex isolate items-start p-[2px] relative"
      data-name="Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(187,187,187,0.35)] border-solid inset-0 pointer-events-none"
      />

      {/* Champion Image Container */}
      <div
        className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 z-[3]"
        data-name="Container"
      >
        <div className="max-w-[60px] relative rounded-[4px] shrink-0 size-[60px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
            <ImageWithFallback
              src={
                unit.imageUrl ||
                `https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=100&h=100&fit=crop&seed=${unit.id}`
              }
              alt={unit.name}
              className="absolute left-0 max-w-none size-full top-0"
            />
          </div>
        </div>
      </div>

      {/* Info Container */}
      <div
        className="box-border content-stretch flex flex-col h-[60px] items-end overflow-clip pl-[9px] pr-[3px] py-[7px] relative shrink-0 z-[1]"
        data-name="Container"
      >
        {/* Champion Name */}
        <div
          className="box-border content-stretch flex flex-col items-start pb-[4px] pt-[3px] px-0 relative shrink-0 w-full"
          data-name="Margin"
        >
          <div
            className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
            data-name="Container"
          >
            <div
              className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.87)] w-full"
              style={
                { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
              }
            >
              <p className="leading-[24px]">{unit.name}</p>
            </div>
          </div>
        </div>

        {/* Stats Container */}
        <div
          className="content-stretch flex items-start relative shrink-0 w-[63.66px]"
          data-name="Container"
        >
          {/* Avg Place */}
          <div
            className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[31.8px]"
            data-name="Container"
          >
            <div
              className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap"
              style={
                { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
              }
            >
              <p className="leading-[14px] whitespace-pre">
                {unit.avgPlace.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Vertical Border + Play Rate */}
          <div
            className="box-border content-stretch flex flex-col items-end pl-px pr-0 py-0 relative self-stretch shrink-0 w-[31.86px]"
            data-name="VerticalBorder"
          >
            <div
              aria-hidden="true"
              className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none"
            />
            <div
              className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.87)] text-nowrap text-right"
              style={
                { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
              }
            >
              <p className="leading-[14px] whitespace-pre">
                {unit.playRate.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
