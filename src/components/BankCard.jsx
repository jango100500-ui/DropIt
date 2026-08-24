import React, { useState, useRef } from 'react';
import './BankCard.css';

export default function BankCard() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  const cardRef = useRef(null);
  const startPos = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    setIsActive(false);
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const deltaX = Math.abs(e.clientX - startPos.current.x);
    const deltaY = Math.abs(e.clientY - startPos.current.y);

    if (!isActive && (deltaX > 8 || deltaY > 8)) {
      setIsActive(true);
    }

    if (isActive && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((centerY - y) / centerY) * 12; 
      const rotateY = ((x - centerX) / centerX) * 12; 
      
      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handlePointerUp = (e) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    setIsDragging(false);
    setIsActive(false);
    setRotation({ x: 0, y: 0 });
  };

  const getTransform = () => {
    if (isActive) {
      return `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1)`;
    }
    if (isDragging) {
      return `rotateX(0deg) rotateY(0deg) scale(0.98)`;
    }
    return `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  const getTransition = () => {
    if (isActive) {
      return 'transform 0.2s ease-out';
    }
    if (isDragging) {
      return 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)';
    }
    return 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
  };

  return (
    <div className="card-wrapper">
      <div
        ref={cardRef}
        className="bank-card"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          transform: getTransform(),
          transition: getTransition()
        }}
      >
        <div className="card-glare" style={{
          transform: `translate(${rotation.y * -2}px, ${rotation.x * 2}px)`,
          opacity: isActive ? 1 : 0
        }} />
      </div>
    </div>
  );
}
