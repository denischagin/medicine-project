import { ReactNode } from "react";
import { queryClient } from "../../config";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "@/entities/auth";
import theme from "../../config/theme";
import { HospitalsListFilterProvider } from "@/entities/hospital";

export interface ProvidersProps {
    children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ChakraProvider theme={theme}>
                    <AuthProvider>
                        <HospitalsListFilterProvider>
                            {children}
                        </HospitalsListFilterProvider>
                    </AuthProvider>
                </ChakraProvider>
            </BrowserRouter>
        </QueryClientProvider>
    );
};
