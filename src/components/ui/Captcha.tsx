import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { useLanguage } from '../../utils/LanguageContext';
import '../../styles/Captcha.scss';

interface CaptchaProps {
  value: string;
  onChange: (value: string) => void;
  onGenerate: (code: string) => void;
  error?: string;
}

const generateCaptchaCode = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

const Captcha = ({ value, onChange, onGenerate, error }: CaptchaProps) => {
  const { t } = useLanguage();
  const [captchaCode, setCaptchaCode] = useState(() => {
    const code = generateCaptchaCode();
    onGenerate(code);
    return code;
  });

  const handleGenerateNew = () => {
    const newCode = generateCaptchaCode();
    setCaptchaCode(newCode);
    onGenerate(newCode);
    onChange('');
  };

  return (
    <div className="captcha-container">
      <div className="captcha-display">
        <div className="captcha-code">{captchaCode}</div>
        <button
          type="button"
          className="captcha-refresh"
          onClick={handleGenerateNew}
          aria-label="Generate new code"
        >
          <RefreshCw size={20} />
        </button>
      </div>
      <input
        type="text"
        className={`captcha-input ${error ? 'error' : ''}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t.contact.enterCode}
        maxLength={6}
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
        style={{ textTransform: 'none' }}
      />
      {error && <span className="captcha-error">{error}</span>}
    </div>
  );
};

export default Captcha;
