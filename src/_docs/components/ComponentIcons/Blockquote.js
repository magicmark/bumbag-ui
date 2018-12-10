import React from 'react';

const SvgComponent = props => (
  <svg width={120} height={40} fill="none" {...props}>
    <path fill="#fff" d="M0 0h120v40H0z" />
    <path fill="#3926A5" d="M0 0h2v40H0z" />
    <path d="M97.564 9H22v3.649h75.564V9zM59.782 20.663H22v3.648h37.782v-3.648z" fill="#3926A5" fillOpacity={0.12} />
    <path
      d="M63.08 24.224c.816 0 1.352-.016 1.608-.048s.424-.128.504-.288c.08-.16.12-.464.12-.912H63.08v-4.488H68v2.448c0 1.84-.112 3.168-.336 3.984-.208.8-.648 1.352-1.32 1.656-.656.304-1.744.456-3.264.456v-2.808zm6.24 0c.816 0 1.352-.016 1.608-.048s.424-.128.504-.288c.08-.16.12-.464.12-.912H69.32v-4.488h4.92v2.448c0 1.84-.112 3.168-.336 3.984-.208.8-.648 1.352-1.32 1.656-.656.304-1.744.456-3.264.456v-2.808zM8.08 12.344c0-1.84.104-3.16.312-3.96.224-.816.664-1.376 1.32-1.68.672-.304 1.768-.456 3.288-.456v2.808c-.816 0-1.352.016-1.608.048s-.424.128-.504.288c-.08.16-.12.464-.12.912H13v4.488H8.08v-2.448zm6.24 0c0-1.84.104-3.16.312-3.96.224-.816.664-1.376 1.32-1.68.672-.304 1.768-.456 3.288-.456v2.808c-.816 0-1.352.016-1.608.048s-.424.128-.504.288c-.08.16-.12.464-.12.912h2.232v4.488h-4.92v-2.448z"
      fill="#E7E5F4"
    />
  </svg>
);

export default SvgComponent;
