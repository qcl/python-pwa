//
//  ViewController.swift
//  python-interpreter
//
//  Created by Qing-Cheng Li on 2019/6/21.
//  Copyright © 2019 Qing-Cheng Li. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController {

    private lazy var webView:WKWebView = {
        let config = WKWebViewConfiguration()
        config.preferences.setValue(true, forKey: "allowFileAccessFromFileURLs")
        let wv = WKWebView.init(frame: .zero, configuration: config)
        return wv
    }()

    private var keyboardLayoutGuideTopConstriant:NSLayoutConstraint? = nil
    
    // MARK: View Controller Life Cycle
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        setupKeyboardObserver()
        setupView()
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        print("view did appear")
    }
    
    func setupKeyboardObserver() {
        NotificationCenter.default.addObserver(self, selector: #selector(keyboard(notification:)), name: UIResponder.keyboardWillChangeFrameNotification, object: nil)
    }

    // MARK: Basic view setup
    
    func setupView() {
        print("setup view")
        view.backgroundColor = .black
        
        let keyboardLayoutGuide = UILayoutGuide()
        view.addLayoutGuide(keyboardLayoutGuide)

        NSLayoutConstraint.activate([
            keyboardLayoutGuide.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            keyboardLayoutGuide.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            keyboardLayoutGuide.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
        
        keyboardLayoutGuideTopConstriant = keyboardLayoutGuide.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor, constant:0)
        NSLayoutConstraint.activate([keyboardLayoutGuideTopConstriant!])
        
        view.addSubview(webView)
        print(view.safeAreaInsets)
//        webView.backgroundColor = .red
        webView.translatesAutoresizingMaskIntoConstraints = false
        view.addConstraints([
            NSLayoutConstraint.init(item: webView, attribute: .top, relatedBy: .equal, toItem: view.safeAreaLayoutGuide, attribute: .top, multiplier: 1, constant: 0),
            NSLayoutConstraint.init(item: webView, attribute: .right, relatedBy: .equal, toItem: view.safeAreaLayoutGuide, attribute: .right, multiplier: 1, constant: 0),
            NSLayoutConstraint.init(item: webView, attribute: .left, relatedBy: .equal, toItem: view.safeAreaLayoutGuide, attribute: .left, multiplier: 1, constant: 0),
            NSLayoutConstraint.init(item: webView, attribute: .bottom, relatedBy: .equal, toItem: keyboardLayoutGuide, attribute: .top, multiplier: 1, constant: 0)
        ])
        
        let indexPath = Bundle.main.url(forResource: "index", withExtension: "html")
        //print(indexPath ?? "not found")
        webView.load(URLRequest.init(url: indexPath!))
    }
    
}

extension ViewController {
    override func viewWillTransition(to size: CGSize, with coordinator: UIViewControllerTransitionCoordinator) {
        print("view will transition")
        print(size)
        keyboardLayoutGuideTopConstriant?.constant = 0
        view.layoutIfNeeded()
    }
}

// MARK: keyboard

extension ViewController {
    
    @objc func keyboard(notification: Notification) {
        let keyboardEndFrame = (notification.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? NSValue)?.cgRectValue
        if let endFrame = keyboardEndFrame {
//            print("=====\n\(view.frame)\n\(endFrame)\n=====\n")
            
            var diffFromSafeArea:CGFloat = 0.0
            if view.frame.maxY == endFrame.maxY || view.frame.maxY == endFrame.minY {
                diffFromSafeArea = view.frame.maxY - view.safeAreaInsets.bottom - endFrame.minY
            } else {
                diffFromSafeArea = endFrame.height - view.safeAreaInsets.bottom
            }
            keyboardLayoutGuideTopConstriant?.constant = (diffFromSafeArea > 0) ? -diffFromSafeArea: 0
            view.layoutIfNeeded()
        }
        
    }
}
