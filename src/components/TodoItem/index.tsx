import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";

const inputStyles = cva(["p-5 text-sm text-white rounded-md"], {
  variants: {
    types: {
      info: "bg-blue-400",
      danger: "bg-orange-500",
      success: "bg-green-500",
    },
  },
  defaultVariants: {
    types: "info",
  },
});

type Props = {
  userId: number;
  id: number;
  title: string;
  completed: false;
};

type AllProps = Props &
  ComponentProps<"div"> &
  VariantProps<typeof inputStyles>;

const TodoItem = ({
  className,
  types,
  userId,
  id,
  title,
  completed,
}: AllProps) => {
  return (
    <div className={cn(className, inputStyles({ types }))}>
      <p>User Id • {userId}</p>
      <p className="">
        {id} • {title} ---
        {completed ? (
          <span className="inline-block bg-teal-500 text-white py-1 text-xs px-2 ml-2 rounded-sm">
            Completed
          </span>
        ) : (
          <span className="inline-block bg-pink-500 text-white py-1 text-xs px-2 ml-2 rounded-sm">
            Not Completed
          </span>
        )}
      </p>
    </div>
  );
};

export default TodoItem;
