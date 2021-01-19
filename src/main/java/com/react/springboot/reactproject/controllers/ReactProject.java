package com.react.springboot.reactproject.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReactProject {

    @GetMapping({"/","/stub/**"})
    public String react(Model model) {
        model.addAttribute("messege", "New User! How are you this is part of the spring model");
        model.addAttribute("name", "New User");
        return "index";
    }
}
