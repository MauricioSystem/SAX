import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import '../../styles/Dropdown.scss';

interface DropdownMenuProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  align?: 'left' | 'right';
}

export const DropdownMenu = ({ children, trigger, align = 'right' }: DropdownMenuProps) => {
  const [open, setOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  // Close dropdown on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (open) {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [open]);

  // Calculate position for fixed dropdown
  React.useEffect(() => {
    if (open && dropdownRef.current && contentRef.current) {
      const triggerRect = dropdownRef.current.getBoundingClientRect();
      const content = contentRef.current;
      
      if (align === 'right') {
        content.style.right = `${window.innerWidth - triggerRect.right}px`;
        content.style.left = 'auto';
      } else {
        content.style.left = `${triggerRect.left}px`;
        content.style.right = 'auto';
      }
      content.style.top = `${triggerRect.bottom + 8}px`;
    }
  }, [open, align]);

  return (
    <div className="dropdown-menu" ref={dropdownRef}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        className="dropdown-trigger"
      >
        {trigger}
        <ChevronDown className={cn('dropdown-arrow', open && 'open')} />
      </button>
      {open && (
        <div
          ref={contentRef}
          className={cn('dropdown-content', align === 'right' ? 'align-right' : 'align-left')}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export const DropdownMenuItem = ({
  children,
  onClick,
  active = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      className={cn('dropdown-item', active && 'active')}
    >
      {children}
    </button>
  );
};
