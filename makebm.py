#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os, subprocess

links = []
rootdir = os.getcwd()

for root, dirs, files in os.walk(rootdir):
    for f in files:
        fext = os.path.splitext(f)[1]
        if '.js' == fext:
            filename = os.path.join(root, f)
            compressed = subprocess.check_output(['yui-compressor', filename])
            links.append('### %s\n\t%s' % (f, compressed))

print '\n\n'.join(links)
