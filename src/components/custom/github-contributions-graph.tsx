"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/ui/contribution-graph";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { GitHubContributionActivity } from "@/lib/github-contributions";
import {
  Section,
  SectionDescription,
  SectionHeading,
  SectionTitle,
} from "./section";

type GitHubContributionsGraphProps = {
  contributions: GitHubContributionActivity[];
};

export function GitHubContributionsGraph({
  contributions,
}: GitHubContributionsGraphProps) {
  if (contributions.length === 0) {
    return (
      <Section>
        <SectionHeading>
          <SectionTitle>GitHub</SectionTitle>
          <span className="text-muted-foreground/60">Recent contributions</span>
        </SectionHeading>
        <SectionDescription>
          Couldn&apos;t load contributions right now.
        </SectionDescription>
      </Section>
    );
  }

  return (
    <Section>
      <SectionHeading>
        <SectionTitle>GitHub</SectionTitle>
        <span className="text-muted-foreground/60">My commit trail</span>
      </SectionHeading>
      <div className="mt-6 rounded-2xl border border-border bg-background p-6 transition-all duration-300 ease-[var(--ease-out)] supports-[hover:hover]:hover:shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground/40 font-mono mb-4">
          <span>Last 12 months</span>
          <a
            className="transition-colors duration-200 supports-[hover:hover]:hover:text-primary"
            href="https://github.com/bhanreddy1973"
            target="_blank"
            rel="noreferrer"
          >
            @bhanreddy1973
          </a>
        </div>
        <ContributionGraph
          className="mx-auto"
          data={contributions}
          blockSize={11}
          blockMargin={2}
          blockRadius={2}
        >
          <ContributionGraphCalendar
            className="px-1 text-[11px]"
            title="GitHub Contributions"
          >
            {({ activity, dayIndex, weekIndex }) => (
              <Tooltip>
                <TooltipTrigger asChild>
                  <g>
                    <ContributionGraphBlock
                      activity={activity}
                      dayIndex={dayIndex}
                      weekIndex={weekIndex}
                    />
                  </g>
                </TooltipTrigger>
                <TooltipContent side="top" className="font-mono text-xs rounded-xl">
                  {activity.count} contribution
                  {activity.count === 1 ? "" : "s"} on{" "}
                  {new Date(activity.date).toLocaleDateString("en-GB")}
                </TooltipContent>
              </Tooltip>
            )}
          </ContributionGraphCalendar>
          <ContributionGraphFooter className="px-1 pt-4 text-xs">
            <ContributionGraphTotalCount>
              {({ totalCount, year }) => (
                <div className="text-muted-foreground/60 font-mono text-[11px]">
                  {totalCount.toLocaleString("en")} contributions in {year}
                </div>
              )}
            </ContributionGraphTotalCount>
            <ContributionGraphLegend align="end" />
          </ContributionGraphFooter>
        </ContributionGraph>
      </div>
    </Section>
  );
}
