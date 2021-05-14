package org.geon.sample.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RootController implements ErrorController {

    @GetMapping("/error")
    public String redirectReact() {
        return "/index.html";
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }
}
