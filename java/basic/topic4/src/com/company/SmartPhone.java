package com.company;

public class SmartPhone extends SmartDevice {

    private String os;
    private String size;

    public SmartPhone() {
    }

    public SmartPhone(boolean on, String model, String owner, String os, String size) {
        super(on, model, owner);
        this.os = os;
        this.size = size;
    }

    @Override
    public void printAttributes() {
        System.out.println("SmartPhone: " + model + " with os " + os + " and size " + size + " it's from " + owner);
    }
}
