'use client'
import { Badge } from "@/components/ui/badge";
import { Phone, Send, Mail, MessageSquare, ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioConfig } from "@/data/Portfolio";

const ContactPage = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [formStatus, setFormStatus] = useState("idle");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("submitting");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "8cdd260e-e747-4f57-80e0-7e386227d2be",
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                    subject: `New contact from ${formState.name} via Portfolio`,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setFormStatus("success");
                setFormState({ name: "", email: "", message: "" });
                setTimeout(() => setFormStatus("idle"), 5000);
            } else {
                setFormStatus("error");
                setTimeout(() => setFormStatus("idle"), 5000);
            }
        } catch (error) {
            console.error(error);
            setFormStatus("error");
            setTimeout(() => setFormStatus("idle"), 5000);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const formStatusMessage = {
        submitting: "Sending your message...",
        success: "Message sent successfully!",
        error: "There was an error sending your message. Please try again."
    };

    const contactMethods = [
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email",
            description: "Drop me an email directly",
            value: portfolioConfig.email || "hello@example.com",
            action: "Send an email",
            link: `mailto:${portfolioConfig.email || "hello@example.com"}`
        },
        {
            icon: <MessageSquare className="h-6 w-6" />,
            title: "Social Media",
            description: "Connect with me on social platforms",
            value: "@myhandle",
            action: "Send a message",
            link: portfolioConfig.socialLinks?.twitter || "#"
        }
    ];

    return (
        <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20 mt-20">
            <motion.div
                className="space-y-16"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Header Section */}
                <motion.div className="text-center" variants={itemVariants}>
                    <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20">
                        <Phone className="h-4 w-4 mr-1.5" />
                        Get In Touch
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
                    <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
                        Have a project in mind or just want to chat? Feel free to reach out.
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                    </p>
                </motion.div>

                <div className="flex gap-10 justify-center">
                    <motion.div variants={itemVariants} className="w-1/2">
                        <Card className="border shadow-lg bg-card/30 backdrop-blur-sm border-indigo-500">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold flex items-center">
                                    <Send className="h-5 w-5 mr-2 text-primary" />
                                    Send Me a Message
                                </CardTitle>
                                <CardDescription>
                                    Fill out the form below and I'll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>

                            <form onSubmit={handleSubmit}>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-sm font-medium">
                                            Your Name
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="John Doe"
                                            className="bg-card/50"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            disabled={formStatus === "submitting" || formStatus === "success"}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-medium">
                                            Your Email
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="bg-card/50"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            disabled={formStatus === "submitting" || formStatus === "success"}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-sm font-medium">
                                            Your Message
                                        </Label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            placeholder="I'd like to discuss a project..."
                                            className="w-full min-h-[120px] rounded-md border border-input bg-card/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                                            value={formState.message}
                                            onChange={handleChange}
                                            required
                                            disabled={formStatus === "submitting" || formStatus === "success"}
                                        />
                                    </div>
                                </CardContent>

                                <CardFooter>
                                    <div className="w-full space-y-4">
                                        <AnimatePresence mode="wait">
                                            {formStatus !== "idle" && (
                                                <motion.div
                                                    className={`flex items-center p-3 rounded-md text-sm ${formStatus === "success"
                                                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                                        : formStatus === "error"
                                                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                                                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                                        }`}
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                >
                                                    {formStatus === "success" ? (
                                                        <CheckCircle className="h-4 w-4 mr-2" />
                                                    ) : formStatus === "error" ? (
                                                        <AlertCircle className="h-4 w-4 mr-2" />
                                                    ) : (
                                                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                                    )}
                                                    {formStatusMessage[formStatus]}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <Button
                                            type="submit"
                                            className="w-full mt-6"
                                            disabled={formStatus === "submitting" || formStatus === "success"}
                                        >
                                            {formStatus === "submitting" ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="ml-2 h-4 w-4" />
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </CardFooter>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactPage;
