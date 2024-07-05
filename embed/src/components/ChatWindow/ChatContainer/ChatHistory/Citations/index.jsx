import { ArrowSquareOut } from "@phosphor-icons/react";
import groupSources from '@/utils/groupSources';

export const Citations = ({ sources }) => {
    console.log(sources)
    if (!sources) return null;
    if (sources.length === 0) return null;

    const groupedSources = groupSources(sources)

    return (<>
        <hr />
        <ul className="flex flex-col text-sm">{
            groupedSources.map((source, index) => {
                return (
                    <li>
                        {index + 1}
                        <a href={source.url} target="_blank">
                        {source.domain}
                        </a>
                        <ArrowSquareOut className="inline-block w-4 h-4 ml-2" />
                    </li>
                );
            })
        }</ul>
        </>
    );
}