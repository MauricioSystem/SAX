import { useState } from 'react';
import { useLanguage } from '../utils/LanguageContext';
import Captcha from '../components/ui/Captcha';
import '../styles/ContactUs.scss';

const ContactUs = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    captcha: '',
  });
  const [captchaCode, setCaptchaCode] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.emailInvalid;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.contact.messageRequired;
    }

    if (!formData.captcha.trim()) {
      newErrors.captcha = t.contact.codeRequired;
    } else if (formData.captcha.toLowerCase() !== captchaCode.toLowerCase()) {
      newErrors.captcha = t.contact.codeInvalid;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create simple message text (no HTML)
      const emailMessage = `
Nuevo Mensaje de Contacto - SAX Bolivia

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nombre: ${formData.name}
Correo Electrónico (Remitente): ${formData.email}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mensaje:

${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Este mensaje fue enviado desde el formulario de contacto de SAX Bolivia.
Fecha: ${new Date().toLocaleString('es-BO', { timeZone: 'America/La_Paz' })}
      `.trim();

      // Use Web3Forms to send email directly (no API keys needed)
      // Web3Forms is a free service that sends emails directly
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'b1f1cf3f-a11c-4de4-bf82-69de500e072d');
      formDataToSend.append('subject', 'Nuevo Mensaje de Contacto - SAX Bolivia');
      formDataToSend.append('from_name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', emailMessage);
      formDataToSend.append('to', 'mauricio16pc@gmail.com');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '', captcha: '' });
        setCaptchaCode('');
      } else {
        throw new Error(result.message || 'Error al enviar el correo');
      }
    } catch (error: any) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">{t.contact.title}</h1>
          <p className="contact-description">{t.contact.description}</p>
          <p className="contact-info">{t.contact.confirmationInfo}</p>
          <p className="contact-spam">{t.contact.spamInfo}</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              {t.contact.name}
            </label>
            <input
              type="text"
              id="name"
              className={`form-input ${errors.name ? 'error' : ''}`}
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder={t.contact.name}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              {t.contact.email}
            </label>
            <input
              type="email"
              id="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder={t.contact.email}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              {t.contact.message}
            </label>
            <textarea
              id="message"
              className={`form-textarea ${errors.message ? 'error' : ''}`}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder={t.contact.message}
              rows={6}
            />
            {errors.message && <span className="form-error">{errors.message}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">{t.contact.verificationCode}</label>
            <p className="captcha-hint">{t.contact.enterCode}</p>
            <Captcha
              value={formData.captcha}
              onChange={(value) => handleInputChange('captcha', value)}
              onGenerate={setCaptchaCode}
              error={errors.captcha}
            />
          </div>

          {submitStatus === 'success' && (
            <div className="form-success">{t.contact.success}</div>
          )}
          {submitStatus === 'error' && (
            <div className="form-error-message">{t.contact.error}</div>
          )}

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? t.contact.sending : t.contact.send}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
