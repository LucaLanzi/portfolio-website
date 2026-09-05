import { Badge } from "@/components/ui/Badge";
import type { SkillGroup } from "@/lib/types";

export function SkillGroupList({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="flex flex-col gap-5">
      {groups.map((group) => (
        <div key={group.category}>
          <p className="font-mono text-xs uppercase tracking-widest text-star-dim">
            {group.category}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <Badge key={item} tone="blue">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
