import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface FloatingButtonProps {
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  label?: string;
}

export function FloatingButton({ onClick, href, icon, label = 'Chat with us' }: FloatingButtonProps) {
  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Component
          onClick={onClick}
          href={href}
          target={href ? '_blank' : undefined}
          rel={href ? 'noopener noreferrer' : undefined}
          className="flex items-center gap-3 bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 font-semibold group"
        >
          {icon || <MessageCircle size={20} />}
          <span className="hidden group-hover:inline">{label}</span>
        </Component>
      </motion.div>
    </motion.div>
  );
}
