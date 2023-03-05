class Dog:
    def __init__(self, name):
        self.name = name
    
    def get_name(self):
        return self._name
    
    def set_name(self, name):
        if isinstance(name, str):
            self._name = name
        else:
            raise Exception()
        
    name = property(get_name, set_name)