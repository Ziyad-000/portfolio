import { motion } from "motion/react";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
    timeline: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      message: "",
      timeline: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ziyad.sayed.cs@gmail.com",
      description: "Drop me a line anytime",
      color: "from-blue-500 to-cyan-500",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=ziyad.sayed.cs@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+20 114-519-0837",
      description: "Available All Days 9AM-6PM EST",
      color: "from-green-500 to-emerald-500",
      href: "tel:+201145190837",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Cairo, Egypt",
      description: "Available for remote work globally",
      color: "from-purple-500 to-indigo-500",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-blue-50 dark:to-blue-950/30 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-purple-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent px-[0px] py-[16px]">
              Let's Build Something Amazing
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to bring your mobile app idea to life? Let's
              discuss your project and create something
              extraordinary together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 rounded-2xl p-8 shadow-xl border border-white/30 dark:border-slate-800">
                <h3 className="text-2xl text-gray-900 dark:text-white mb-8">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 * index,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50/80 dark:hover:bg-slate-800/50 transition-all duration-300 group"
                    >
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${info.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 dark:text-white mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-1">
                          {info.value}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-800">
                  <h4 className="text-gray-900 dark:text-white mb-4">
                    Availability
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        Available for new projects
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        Typically responds within 24 hours
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 rounded-2xl p-8 shadow-xl border border-white/30 dark:border-slate-800">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Label
                        htmlFor="name"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange(
                            "name",
                            e.target.value,
                          )
                        }
                        className="mt-2 bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 dark:text-white dark:placeholder:text-gray-400 focus:border-purple-400 transition-colors duration-300"
                        placeholder="John Doe"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Label
                        htmlFor="email"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange(
                            "email",
                            e.target.value,
                          )
                        }
                        className="mt-2 bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 dark:text-white dark:placeholder:text-gray-400 focus:border-purple-400 transition-colors duration-300"
                        placeholder="john@example.com"
                        required
                      />
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Label
                        htmlFor="company"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Company/Organization
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange(
                            "company",
                            e.target.value,
                          )
                        }
                        className="mt-2 bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 dark:text-white dark:placeholder:text-gray-400 focus:border-purple-400 transition-colors duration-300"
                        placeholder="Your Company"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Label
                        htmlFor="projectType"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Project Type *
                      </Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) =>
                          handleInputChange(
                            "projectType",
                            value,
                          )
                        }
                      >
                        <SelectTrigger className="mt-2 bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 dark:text-white focus:border-purple-400">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new-app">
                            New Mobile App
                          </SelectItem>
                          <SelectItem value="redesign">
                            App Redesign
                          </SelectItem>
                          <SelectItem value="maintenance">
                            App Maintenance
                          </SelectItem>
                          <SelectItem value="consultation">
                            Technical Consultation
                          </SelectItem>
                          <SelectItem value="other">
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Label
                        htmlFor="budget"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Project Budget
                      </Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          handleInputChange("budget", value)
                        }
                      >
                        <SelectTrigger className="mt-2 bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 dark:text-white focus:border-purple-400">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5k-10k">
                            $5,000 - $10,000
                          </SelectItem>
                          <SelectItem value="10k-25k">
                            $10,000 - $25,000
                          </SelectItem>
                          <SelectItem value="25k-50k">
                            $25,000 - $50,000
                          </SelectItem>
                          <SelectItem value="50k+">
                            $50,000+
                          </SelectItem>
                          <SelectItem value="discuss">
                            Let's discuss
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Label
                        htmlFor="timeline"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Project Timeline
                      </Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) =>
                          handleInputChange("timeline", value)
                        }
                      >
                        <SelectTrigger className="mt-2 bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 dark:text-white focus:border-purple-400">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">
                            ASAP
                          </SelectItem>
                          <SelectItem value="1-3months">
                            1-3 months
                          </SelectItem>
                          <SelectItem value="3-6months">
                            3-6 months
                          </SelectItem>
                          <SelectItem value="6months+">
                            6+ months
                          </SelectItem>
                          <SelectItem value="flexible">
                            Flexible
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <Label
                      htmlFor="message"
                      className="text-gray-700 dark:text-gray-300"
                    >
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange(
                          "message",
                          e.target.value,
                        )
                      }
                      className="mt-2 bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 dark:text-white dark:placeholder:text-gray-400 focus:border-purple-400 transition-colors duration-300 min-h-[120px]"
                      placeholder="Tell me about your project idea, goals, and any specific requirements..."
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="pt-4"
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-800 text-center"
                >
                  <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">
                      I'll get back to you within 24 hours
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}