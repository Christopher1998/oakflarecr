"use client";

import {
  type KeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

export type SelectOption = {
  value: string;
  label: string;
};

export default function SelectField({
  id,
  name,
  label,
  placeholder,
  options,
  value,
  onChange,
  required = false,
  invalid = false,
  describedBy,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  options: readonly SelectOption[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  invalid?: boolean;
  describedBy?: string;
}) {
  const generatedId = useId();
  const menuId = id + "-menu-" + generatedId;
  const rootRef = useRef<HTMLDivElement>(null);
  const selectedIndex = options.findIndex((option) => option.value === value);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(
    selectedIndex >= 0 ? selectedIndex : 0,
  );

  const selectedOption = options[selectedIndex];
  const searchRef = useRef({ value: "", time: 0 });

  useEffect(() => {
    if (open) {
      document.getElementById(menuId + "-option-" + activeIndex)?.scrollIntoView({ block: "nearest" });
    }
  }, [open, activeIndex, menuId]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        rootRef.current &&
        !rootRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  function openMenu() {
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    setOpen(true);
  }

  function selectOption(index: number) {
    onChange(options[index].value);
    setActiveIndex(index);
    setOpen(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Escape") {
      if (open) {
        event.preventDefault();
        setOpen(false);
      }

      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();

      if (!open) {
        setActiveIndex(
          selectedIndex >= 0
            ? selectedIndex
            : event.key === "ArrowDown"
              ? 0
              : options.length - 1,
        );
        setOpen(true);
        return;
      }

      const direction = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex(
        (current) => (current + direction + options.length) % options.length,
      );
      return;
    }

    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex(event.key === "Home" ? 0 : options.length - 1);
      return;
    }

    if (event.key.length === 1 && event.key !== " " && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      const now = Date.now();
      const search = now - searchRef.current.time < 700 ? searchRef.current.value + event.key : event.key;
      searchRef.current = { value: search.toLowerCase(), time: now };
      const match = options.findIndex((option) => option.label.toLowerCase().startsWith(search.toLowerCase()));
      if (match >= 0) {
        setOpen(true);
        setActiveIndex(match);
      }
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();

      if (!open) {
        openMenu();
        return;
      }

      selectOption(activeIndex);
    }
  }

  return (
    <div
      ref={rootRef}
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      <label
        id={id + "-label"}
        htmlFor={id}
        className="field-label"
      >
        {label}
      </label>

      <input type="hidden" name={name} value={value} />

      <button
        id={id}
        type="button"
        role="combobox"
        aria-labelledby={id + "-label " + id}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-activedescendant={
          open ? menuId + "-option-" + activeIndex : undefined
        }
        aria-required={required}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        onClick={() => {
          if (open) {
            setOpen(false);
          } else {
            openMenu();
          }
        }}
        onKeyDown={handleKeyDown}
        className="oakflare-field flex items-center justify-between gap-4 text-left"
      >
        <span className={selectedOption ? "text-[#0D0D0C]" : "text-paper-muted"}>
          {selectedOption?.label ?? placeholder}
        </span>

        <span
          aria-hidden="true"
          className={
            "shrink-0 text-sm text-paper-muted transition-transform duration-200 " +
            (open ? "rotate-180" : "")
          }
        >
          ↓
        </span>
      </button>

      {open && (
        <ul
          id={menuId}
          role="listbox"
          aria-labelledby={id + "-label"}
          className="absolute left-0 right-0 z-40 mt-2 max-h-64 overflow-y-auto overscroll-contain rounded border border-[#c6c3b9] bg-paper-surface p-1.5 shadow-[0_8px_24px_rgba(13,13,12,0.08)]"
        >
          {options.map((option, index) => {
            const selected = option.value === value;
            const active = index === activeIndex;

            return (
              <li
                id={menuId + "-option-" + index}
                key={option.value}
                role="option"
                aria-selected={selected}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => selectOption(index)}
                onPointerMove={() => setActiveIndex(index)}
                className={
                  "flex cursor-pointer items-center justify-between gap-4 min-h-11 rounded-sm px-3 py-2.5 text-sm text-[#0D0D0C] transition-colors " +
                  (active ? "bg-[#e9e4d9] outline-1 -outline-offset-1 outline-copper" : selected ? "bg-[#E87932]/10" : "bg-transparent")
                }
              >
                <span>{option.label}</span>
                {selected && (
                  <span aria-hidden="true" className="text-copper">
                    ✓
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
